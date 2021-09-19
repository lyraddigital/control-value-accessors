import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from 'src/app/shared/layout';
import { SettingsPageComponent } from 'src/app/pages';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
