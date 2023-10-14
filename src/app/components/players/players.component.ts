import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  PoNotification,
  PoNotificationService,
  PoPageSlideComponent,
  PoTableAction,
  PoTableColumn,
  PoToasterOrientation,
} from '@po-ui/ng-components';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.less'],
})
export class PlayersComponent implements OnInit {
  table: any;
  actions!: Array<PoTableAction>;
  columns!: Array<PoTableColumn>;
  @ViewChild('pageSlide')
  private readonly poPageSlide!: PoPageSlideComponent;
  playersForm!: FormGroup;
  pageSize = 20;
  currentPage = 1;

  constructor(
    private userService: UserService,
    private formBuild: FormBuilder,
    private poNotificationService: PoNotificationService
  ) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
    await this.getActions();
    await this.getColumns();
    await this.getTable();
  }

  async getActions() {
    this.actions = [
      { label: 'Editar', action: () => {} },
      { label: 'Deletar', action: () => {} },
    ];
  }

  async getColumns() {
    this.columns = [
      { label: 'Nome', property: 'name' },
      {
        label: 'Gênero',
        property: 'generous',
        type: 'label',
        labels: [
          { label: 'Masculino', color: 'color-09', value: 'masculine' },
          { label: 'Feminino', color: 'color-08', value: 'feminine' },
        ],
      },
    ];
  }

  create() {
    this.initForm();
    this.poPageSlide.open();
  }

  onSave(event: any) {
    this.userService.create(event).subscribe((response) => {
      this.userService.update(response);
      this.poPageSlide.close();

      const poNotification: PoNotification = {
        message: 'Jogador cadastrado com sucesso',
        orientation: PoToasterOrientation.Top,
      };
      this.poNotificationService.success(poNotification);
    });
  }

  initForm(): void {
    this.playersForm = this.formBuild.group({
      name: new FormControl(null, Validators.required),
      generous: new FormControl(null, Validators.required),
    });
  }

  async onChangeCurrentPage({ currentPage }: any): Promise<void> {
    this.currentPage = currentPage;
    await this.getTable();
  }

  itemSelectable(event: any): void {

    if(event.type == 'add'){
      this.userService.put(event.event);
    }else{

    }
    console.log(event.event)
  }

  async onChangePageSize({ pageSize, currentPage }: any): Promise<void> {
    this.currentPage = currentPage;
    this.pageSize = pageSize;

    await this.getTable();
  }

  async getTable() {
    this.userService.get().subscribe((valor) => {
      this.table = valor;
    });
    // this.userService.getPagination(this.pageSize, this.currentPage).subscribe((valor) => {
    //   this.table = valor;
    // });
  }
}
