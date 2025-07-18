

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/Calculator/Calculator';
import { CreateMauiAppComponent } from './components/CreateMauiApp/CreateMauiApp';
import { ContentPageComponent } from './components/ContentPage/ContentPage';
import { CalculatorAppComponent } from './components/CalculatorApp/CalculatorApp';

@NgModule({
  declarations: [CalculatorComponent, CreateMauiAppComponent, ContentPageComponent, CalculatorAppComponent],
  imports: [BrowserModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [CalculatorAppComponent]
})
export class AppModule { }