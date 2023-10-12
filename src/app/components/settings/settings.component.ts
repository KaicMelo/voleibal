import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  PoNotification,
  PoNotificationService,
  PoToasterOrientation,
} from '@po-ui/ng-components';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  settings: any;

  constructor(
    private formBuild: FormBuilder,
    private settingsService: SettingsService,
    private poNotificationService: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.settingsService.get().subscribe((response: any) => {
      this.settings = response.shift() ;

      this.settingsForm.patchValue({
        qtSets: this.settings.qt_sets,
        qtPlayers: this.settings.qt_players,
      });
    });
  }

  onSave(value: any) {
    const payload = {
      qt_sets: value.qtSets,
      qt_players: value.qtPlayers,
    };
    this.settingsService.put(this.settings.id,payload).subscribe((response: any) => {
      const poNotification: PoNotification = {
        message: 'Configurações atualizadas com sucesso!',
        orientation: PoToasterOrientation.Top,
      };
      this.poNotificationService.success(poNotification);
    });
  }

  async initForm() {
    this.settingsForm = this.formBuild.group({
      qtSets: new FormControl(null, Validators.required),
      qtPlayers: new FormControl(null, Validators.required),
    });
  }
}
