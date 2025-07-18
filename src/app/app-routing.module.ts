

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/Calculator/Calculator';
import { CreateMauiAppComponent } from './components/CreateMauiApp/CreateMauiApp';
import { ContentPageComponent } from './components/ContentPage/ContentPage';
import { CalculatorAppComponent } from './components/CalculatorApp/CalculatorApp';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'calculator', component: CalculatorComponent },
    { path: 'create-maui-app', component: CreateMauiAppComponent },
    { path: 'content-page', component: ContentPageComponent },
    { path: '', component: CalculatorAppComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }