

import { Routes } from '@angular/router';
import { CalculatorMainPage } from './components/CalculatorMainPage/CalculatorMainPage';
import { CalculatorScreen } from './components/CalculatorScreen/CalculatorScreen';
import { CalculatorUI } from './components/CalculatorUI/CalculatorUI';

export const AppRoute: Routes = [
  { path: '', component: CalculatorMainPage },
  { path: 'calculator', component: CalculatorScreen },
  { path: 'calculator-ui', component: CalculatorUI }
];