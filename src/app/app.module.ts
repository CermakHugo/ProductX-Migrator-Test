

import { NgModule } from '@angular/core';
import { App } from './components/App.component';
import { CalculatorMainPage } from './components/CalculatorMainPage/CalculatorMainPage.component';
import { AppDelegate } from './appDelegate';
import { MauiProgram } from './services/MauiProgram.service';

@NgModule({
  declarations: [App, CalculatorMainPage],
  providers: [AppDelegate, MauiProgram],
  bootstrap: [App]
})
export class AppModule { }