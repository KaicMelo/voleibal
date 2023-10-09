import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;

  constructor(private formBuild: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSave(value: any) {}

  async initForm() {
    this.settingsForm = this.formBuild.group({
      qtSets: new FormControl(15, Validators.required),
    });
  }
}
