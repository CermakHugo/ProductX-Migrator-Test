

import { createAction } from 'redux-actions';

export const SWITCH_CALCULATOR_TAB = 'SWITCH_CALCULATOR_TAB';

export const switchCalculatorTab = (tab) => {
  return {
    type: SWITCH_CALCULATOR_TAB,
    tab,
  };
};