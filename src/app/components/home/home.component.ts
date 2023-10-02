import { Component } from '@angular/core';
import { BoardService } from 'src/app/services/board/board.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  constructor(
    private userService: UserService,
    private boardService: BoardService
  ) {}

  resetBoard() {
    this.boardService.put(0, 0);
  }
}
