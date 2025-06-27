

import { createAction, props } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorActions {

  public readonly INIT_CALCULATOR = '[Calculator] Initialize Calculator';
  public readonly UPDATE_CALCULATION = '[Calculator] Update Calculation';
  public readonly UPDATE_RESULT = '[Calculator] Update Result';

  public readonly initCalculator = createAction(
    this.INIT_CALCULATOR,
    props<{ uiComponents: any }>()
  );

  public readonly updateCalculation = createAction(
    this.UPDATE_CALCULATION,
    props<{ calculation: string }>()
  );

  public readonly updateResult = createAction(
    this.UPDATE_RESULT,
    props<{ result: number }>()
  );

  public initializeUIComponents(uiComponents: any) {
    return this.initCalculator({ uiComponents });
  }

  public updateCalculationValue(calculation: string) {
    return this.updateCalculation({ calculation });
  }

  public updateResultValue(result: number) {
    return this.updateResult({ result });
  }
}