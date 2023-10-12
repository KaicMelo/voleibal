import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PoModalComponent,
  PoNotification,
  PoNotificationService,
  PoToasterOrientation,
} from '@po-ui/ng-components';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-team-configuration',
  templateUrl: './team-configuration.component.html',
  styleUrls: ['./team-configuration.component.less'],
})
export class TeamConfigurationComponent implements OnInit {
  @ViewChild('modal') poModal!: PoModalComponent;

  players: any[] = [];
  teams: any = [];
  running: any = [];
  settings: any;
  playerToChange: any;
  titleToChange = '';

  constructor(
    private userService: UserService,
    private settingsService: SettingsService,
    private poNotificationService: PoNotificationService
  ) {}

  async ngOnInit() {
    await this.getData();
  }

  changePlayerModal(event: any) {
    this.titleToChange = `Substituir ${event.name} por`;
    this.playerToChange = event;
    this.poModal.open();
  }

  playerSelectedToChange(event: any) {
    let player = '';

    this.teams.map((emit: any) => {
      for (let index = 0; index < emit.team.length; index++) {
        if (emit.team[index] == this.playerToChange) {
          player = emit.team[index].name
          emit.team[index] = event;
        }
      }
    });

    const poNotification: PoNotification = {
      message: `${player} por ${event.name}`,
      orientation: PoToasterOrientation.Top,
    };
    this.poNotificationService.success(poNotification);

    this.poModal.close();
  }

  drawTeams() {
    this.teams = [];
    this.running = [];

    const qt_teams = Math.floor(this.players.length / this.settings.qt_players);

    shuffleArray(this.players);

    for (let index = 1; index <= qt_teams; index++) {
      this.teams.push({ team: [] });
    }

    let count = 0;

    for (let i = 1; i < this.players.length; i++) {
      if (this.teams[count]) {
        this.teams[count].team.push(this.players[i]);
        if (this.teams[count].team.length == this.settings.qt_players) {
          count++;
        }
      } else {
        this.running.push(this.players[i]);
      }
    }
  }

  async getData() {
    this.settingsService.get().subscribe((response) => {
      this.settings = response.shift();
    });
    this.userService.get().subscribe((response) => {
      this.players = response;
    });
  }
}

function shuffleArray(arr: any) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
