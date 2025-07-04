

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './components/App/App.component';

@NgModule({
  declarations: [App],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }