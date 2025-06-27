

package src.constants;

public class Constants {
    public static final int MAX_DIGITS = 10;
    public static final String currentCalculation = "";
    public static final String result = "";

    public static boolean isValidInput(String input) {
        try {
            Double.parseDouble(input);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    public static boolean isWithinDigitLimit(String input) {
        return input.length() <= MAX_DIGITS;
    }
}