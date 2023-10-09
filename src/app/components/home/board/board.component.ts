import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board/board.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: any;
  time_1: any;
  time_2: any;

  constructor(
    private boardService: BoardService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.boardService.get().subscribe((valor) => {
      this.board = valor;
    });
    this.teamService.get().subscribe((valor) => {
      this.time_1 = valor.team_1.length;
      this.time_2 = valor.team_2.length;
    });
  }
}
