import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserSettings } from './models';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  formGroup: FormGroup;
  settings: UserSettings = {
    allowSMS: true,
    allowEmail: false
  };

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({
      allowSMS: [this.settings.allowSMS],
      allowEmail: [this.settings.allowEmail]
    });
  }

  updateSettings(): void {
    this.settings = this.formGroup.value;
  }
}
