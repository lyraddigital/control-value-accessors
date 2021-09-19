import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SlideToggleModule } from 'src/app/shared/controls';
import { YesNoModule } from 'src/app/shared/pipes';

import { SettingsPageComponent } from './settings-page.component';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, ReactiveFormsModule, YesNoModule, SlideToggleModule],
  exports: [SettingsPageComponent],
})
export class SettingsPageModule {}
