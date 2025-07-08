

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/Calculator/Calculator.component';
import { CalculatorScreenComponent } from './components/CalculatorScreen/CalculatorScreen.component';
import { CalculatorMainPageComponent } from './components/CalculatorMainPage/CalculatorMainPage.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'calculator-screen', component: CalculatorScreenComponent },
  { path: 'calculator-main-page', component: CalculatorMainPageComponent },
  { path: '', redirectTo: 'calculator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }