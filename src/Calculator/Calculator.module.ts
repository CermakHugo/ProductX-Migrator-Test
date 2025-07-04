

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calculator } from './Calculator.component';

@NgModule({
  declarations: [Calculator],
  imports: [CommonModule],
  exports: [Calculator]
})
export class CalculatorModule { }