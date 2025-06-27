

package backend.actions;

import backend.enums.ActionTypes;
import backend.models.CalculatorState;
import redux.Action;
import redux.ActionCreator;
import redux.Dispatch;
import redux.Store;

public class CalculatorActions {
    public static final String HANDLE_BUTTON_CLICK = "HANDLE_BUTTON_CLICK";

    public static ActionCreator handleButtonClick = new ActionCreator() {
        @Override
        public Action create(Object... args) {
            CalculatorState state = (CalculatorState) args[0];
            String buttonValue = (String) args[1];

            double calculation = state.getCalculation();
            String display = state.getDisplay();

            if (buttonValue.equals("C")) {
                calculation = 0;
                display = "";
            } else if (buttonValue.equals("=")) {
                display = String.valueOf(calculation);
            } else if (buttonValue.equals("+") || buttonValue.equals("-") || buttonValue.equals("*") || buttonValue.equals("/")) {
                try {
                    calculation = Double.parseDouble(display);
                } catch (NumberFormatException e) {
                    // Handle exception
                }
                display = buttonValue;
            } else {
                display += buttonValue;
                try {
                    calculation = Double.parseDouble(display);
                } catch (NumberFormatException e) {
                    // Handle exception
                }
            }

            return new Action(HANDLE_BUTTON_CLICK, new CalculatorState(calculation, display));
        }
    };

    public static void dispatchHandleButtonClick(Store store, CalculatorState state, String buttonValue) {
        store.dispatch(handleButtonClick.create(state, buttonValue));
    }
}