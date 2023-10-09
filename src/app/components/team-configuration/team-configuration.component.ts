import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-team-configuration',
  templateUrl: './team-configuration.component.html',
  styleUrls: ['./team-configuration.component.less'],
})
export class TeamConfigurationComponent implements OnInit {
  players: any[] = [];
  teams: any = [];
  settings: any;

  constructor(
    private userService: UserService,
    private settingsService: SettingsService
  ) {}

  async ngOnInit() {
    await this.getData();
  }

  drawTeams() {
    this.teams = [];

    const qt_teams = Math.floor(this.players.length / this.settings.qt_players);

    shuffleArray(this.players);

    for (let index = 1; index <= qt_teams; index++) {
      this.teams.push({ team: [] });
    }

    let count = 0;

    let temp: any = [];

    for (let i = 1; i < this.players.length; i++) {
      if (this.teams[count]) {
        this.teams[count].team.push(this.players[i]);
        if (this.teams[count].team.length == 6) {
          count++;
        }
      } else {
        console.log(this.players[i]);
        //esta rodando
      }
    }
  }

  async getData() {
    this.settingsService.get().subscribe((response) => {
      this.settings = response[0];
    });
    this.userService.get().subscribe((response) => {
      this.players = response;
    });
  }
}

function shuffleArray(arr: any) {
  // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
  const j = Math.floor(Math.random() * (i + 1));
  // Reposicionando elemento
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}
