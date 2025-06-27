

package backend;

import java.util.Stack;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

class Calculator {
    private Stack<String> calculationStack;
    private String displayField;

    public Calculator() {
        calculationStack = new Stack<>();
        displayField = "";
    }

    public void performArithmeticOperation(String operator) {
        if (calculationStack.size() < 2) {
            return;
        }

        String operand2 = calculationStack.pop();
        String operand1 = calculationStack.pop();

        double result = calculate(operand1, operator, operand2);

        calculationStack.push(String.valueOf(result));
        displayField = String.valueOf(result);
    }

    public double calculate(String operand1, String operator, String operand2) {
        double num1 = Double.parseDouble(operand1);
        double num2 = Double.parseDouble(operand2);

        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                if (num2 == 0) {
                    throw new ArithmeticException("Cannot divide by zero");
                }
                return num1 / num2;
            default:
                throw new UnsupportedOperationException("Unsupported operator");
        }
    }

    public void handleOperatorClick(String operator) {
        if (!displayField.isEmpty()) {
            calculationStack.push(displayField);
            displayField = "";
        }

        performArithmeticOperation(operator);
    }

    public void handleDigitClick(String digit) {
        displayField += digit;
    }

    public void handleClearClick() {
        calculationStack.clear();
        displayField = "";
    }

    public String getDisplayField() {
        return displayField;
    }
}

@Path("/calculator")
public class CalculatorBackend {
    private Calculator calculator;

    public CalculatorBackend() {
        calculator = new Calculator();
    }

    @POST
    @Path("/operator")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response handleOperatorClick(String operator) {
        calculator.handleOperatorClick(operator);
        return Response.ok(calculator.getDisplayField()).build();
    }

    @POST
    @Path("/digit")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response handleDigitClick(String digit) {
        calculator.handleDigitClick(digit);
        return Response.ok(calculator.getDisplayField()).build();
    }

    @POST
    @Path("/clear")
    @Produces(MediaType.APPLICATION_JSON)
    public Response handleClearClick() {
        calculator.handleClearClick();
        return Response.ok(calculator.getDisplayField()).build();
    }
}