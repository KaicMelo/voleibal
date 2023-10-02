import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board/board.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: any;
  time: any;

  constructor(
    private boardService: BoardService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.boardService.get().subscribe((valor) => {
      this.board = valor;
    });
    this.userService.get().subscribe((valor) => {
      this.time = valor.length;
    });
  }
}
