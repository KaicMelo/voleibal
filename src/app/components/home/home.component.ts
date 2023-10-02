import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board/board.service';
import { TeamService } from 'src/app/services/team/team.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit{
  team: any;

  constructor(
    private userService: UserService,
    private boardService: BoardService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.teamService.get().subscribe((valor) => {
      this.team = valor;
    });
  }

  resetBoard() {
    this.boardService.put(0, 0);
  }
}
