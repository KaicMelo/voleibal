import { UserService } from '../../../services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from 'src/app/services/board/board.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less'],
})
export class TeamComponent implements OnInit {
  @Input() team: any;

  board: any;
  onAdd = false;
  titleModal = 'Selecione os jogadores';
  contentModal: any;

  @Input() teamNumber: any;
  constructor(
    private userService: UserService,
    private boardService: BoardService
  ) {}

  async ngOnInit(): Promise<void> {
    this.userService.get().subscribe((valor) => {
      this.contentModal = valor;
    });
    this.boardService.get().subscribe((valor) => {
      this.board = valor;
    });
  }

  sum() {
    if (this.teamNumber == 1) {
      const t = this.board.team_1 + 1;
      this.boardService.put(t, this.board.team_2);
    } else {
      const t = this.board.team_2 + 1;
      this.boardService.put(this.board.team_1, t);
    }
  }

  sub() {
    if (this.teamNumber == 1) {
      if (this.board.team_1 == 0) {
        return;
      }
      const t = this.board.team_1 - 1;
      this.boardService.put(t, this.board.team_2);
    } else {
      if (this.board.team_2 == 0) {
        return;
      }
      const t = this.board.team_2 - 1;
      this.boardService.put(this.board.team_1, t);
    }
  }

  add(){
    this.onAdd = true
  }

  onClose() {
    this.onAdd = false;
  }
}
