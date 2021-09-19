import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent } from 'src/app/shared/layout';
import { SettingsPageModule } from './pages';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    SettingsPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
