import {
  Component,
  ViewChild,
  Input,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import {
  PoModalComponent,
  PoNotification,
  PoNotificationService,
  PoToasterOrientation,
} from '@po-ui/ng-components';
import { TeamService } from 'src/app/services/team/team.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal!: PoModalComponent;

  @Input() title = '';
  @Input() content: any;
  @Input() teamNumber: any;

  team: any;

  @Output() onClose = new EventEmitter<boolean>();

  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private poNotificationService: PoNotificationService
  ) {}

  async ngOnInit(): Promise<void> {
    this.modal.open();
    this.teamService.get().subscribe((value) => {
      this.team = value;
    });

    const team: any = [];
    this.content.filter((fn: any) => {
      if (fn != event) {
        team.push(fn);
      }
    });
  }

  onConfirm() {
    this.onClose.emit(false);
  }

  async add(event: any) {
    if (this.team) {
      if (this.team.team_2.includes(event)) {
        const poNotification: PoNotification = {
          message: `${event.name} está jogando no time adversário`,
          orientation: PoToasterOrientation.Top,
        };
        this.poNotificationService.information(poNotification);
        return;
      }

      if (this.teamNumber == 1) {
        if (!this.team.team_1.includes(event)) {
          if (this.team.team_1.length == 6) {
            const poNotification: PoNotification = {
              message: '6 é limite máximo de jogadores',
              orientation: PoToasterOrientation.Top,
            };
            this.poNotificationService.information(poNotification);
            return;
          }
          this.team.team_1.push(event);
        }
        this.teamService.put(this.team.team_1, this.team.team_2);
      } else {
        if (this.team.team_1.includes(event)) {
          const poNotification: PoNotification = {
            message: `${event.name} está jogando no time adversário`,
            orientation: PoToasterOrientation.Top,
          };
          this.poNotificationService.information(poNotification);
          return;
        }

        if (!this.team.team_2.includes(event)) {
          if (this.team.team_2.length == 6) {
            const poNotification: PoNotification = {
              message: '6 é limite máximo de jogadores',
              orientation: PoToasterOrientation.Top,
            };
            this.poNotificationService.information(poNotification);
            return;
          }

          this.team.team_2.push(event);
        }
        this.teamService.put(this.team.team_1, this.team.team_2);
      }
    }
  }

  remove(event: any) {
    if (this.team) {
      if (this.teamNumber == 1) {
        const team_1: any = [];
        this.team.team_1.filter((fn: any) => {
          if (fn != event) {
            team_1.push(fn);
          }
        });
        this.teamService.put(team_1, this.team.team_2);
      } else {
        const team_2: any = [];
        this.team.team_2.filter((fn: any) => {
          if (fn != event) {
            team_2.push(fn);
          }
        });
        this.teamService.put(this.team.team_1, team_2);
      }
    }
  }
}
