

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MauiAppComponent } from './components/MauiApp/MauiApp.component';
import { CalculatorComponent } from './components/Calculator/Calculator.component';
import { CalculatorScreenComponent } from './components/CalculatorScreen/CalculatorScreen.component';
import { AppShellComponent } from './components/AppShell/AppShell.component';
import { CalculatorMainPageComponent } from './components/CalculatorMainPage/CalculatorMainPage.component';
import { CalculatorService } from './services/Calculator.service';

@NgModule({
  declarations: [AppComponent, MauiAppComponent, CalculatorComponent, CalculatorScreenComponent, AppShellComponent, CalculatorMainPageComponent],
  imports: [BrowserModule],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }