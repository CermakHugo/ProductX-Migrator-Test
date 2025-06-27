

package backend.controllers;

public class CalculateOnNegative {
    public static double calculateOnNegative(double inputValue) {
        if (inputValue == null) {
            throw new NullPointerException("Input value cannot be null");
        }
        if (!(inputValue instanceof Number)) {
            throw new IllegalArgumentException("Input value must be a number");
        }
        if (inputValue < 0) {
            return inputValue * -1;
        } else {
            return inputValue;
        }
    }
}