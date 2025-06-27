

package controllers;

import services.CalculatorService;
import services.Calculator;
import java.util.logging.Logger;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

public class CalculatorController {
    private static final Logger logger = Logger.getLogger(CalculatorController.class.getName());
    private CalculatorService calculatorService;

    public CalculatorController() {
        this.calculatorService = new CalculatorService();
    }

    @POST
    @Path("/initialize-calculator")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response initializeCalculator(String handle, String ownership) {
        try {
            Object result = calculatorService.initializeCalculator(handle, ownership);
            return Response.status(200).entity(result).build();
        } catch (Exception e) {
            logger.severe("Error initializing calculator: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to initialize calculator").build();
        }
    }

    @POST
    @Path("/create-calculator-instance")
    @Produces(MediaType.APPLICATION_JSON)
    public Response createCalculatorInstance() {
        try {
            Object result = calculatorService.createCalculatorInstance();
            return Response.status(200).entity(result).build();
        } catch (Exception e) {
            logger.severe("Error creating calculator instance: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to create calculator instance").build();
        }
    }

    @POST
    @Path("/perform-arithmetic-operation")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response performArithmeticOperation(Object request) {
        try {
            Object result = calculatorService.performArithmeticOperation(request);
            return Response.status(200).entity(result).build();
        } catch (Exception e) {
            logger.severe("Error performing arithmetic operation: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to perform arithmetic operation").build();
        }
    }

    @POST
    @Path("/calculate-percentage")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response calculatePercentage(Object request) {
        try {
            Object result = calculatorService.calculatePercentage(request);
            return Response.status(200).entity(result).build();
        } catch (Exception e) {
            logger.severe("Error calculating percentage: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to calculate percentage").build();
        }
    }

    @POST
    @Path("/clear-calculation")
    @Produces(MediaType.APPLICATION_JSON)
    public Response clearCalculation() {
        try {
            Object result = calculatorService.clearCalculation();
            return Response.status(200).entity(result).build();
        } catch (Exception e) {
            logger.severe("Error clearing calculation: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to clear calculation").build();
        }
    }

    @POST
    @Path("/evaluate-calculation")
    @Produces(MediaType.APPLICATION_JSON)
    public Response evaluateCalculation() {
        try {
            Object result = calculatorService.evaluateCalculation();
            return Response.status(200).entity(result).build();
        } catch (Exception e) {
            logger.severe("Error evaluating calculation: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to evaluate calculation").build();
        }
    }

    @POST
    @Path("/calculate-expression")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response calculateExpression(Object request) {
        try {
            Object result = calculatorService.calculateExpression(request);
            return Response.status(200).entity(result).build();
        } catch (ArithmeticException e) {
            logger.severe("Error calculating expression: " + e.getMessage());
            return Response.status(500).entity("Error: Division by zero").build();
        } catch (Exception e) {
            logger.severe("Error calculating expression: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to calculate expression").build();
        }
    }

    @GET
    @Path("/get-display-field")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDisplayField() {
        try {
            Object result = calculatorService.getDisplayField();
            return Response.status(200).entity(result).build();
        } catch (Exception e) {
            logger.severe("Error getting display field: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to retrieve display field").build();
        }
    }

    @PUT
    @Path("/update-display-field")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateDisplayField(int value) {
        try {
            calculatorService.updateDisplayField(value);
            return Response.status(200).build();
        } catch (Exception e) {
            logger.severe("Error updating display field: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to update display field").build();
        }
    }

    @PUT
    @Path("/update-calculator-entry")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateCalculatorEntry(Object request) {
        try {
            Object result = calculatorService.updateCalculatorEntry(request);
            return Response.status(200).entity(result).build();
        } catch (Exception e) {
            logger.severe("Error updating calculator entry: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to update calculator entry").build();
        }
    }

    @PUT
    @Path("/calculator/switch-tab")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response switchCalculatorTab(Object request) {
        try {
            Object result = calculatorService.switchCalculatorTab(request);
            return Response.status(200).entity(result).build();
        } catch (Exception e) {
            logger.severe("Error switching calculator tab: " + e.getMessage());
            return Response.status(500).entity("Error: Unable to switch calculator tab").build();
        }
    }

    public void handleNumberButtonClick(int number) {
        calculatorService.updateDisplay(number);
    }

    public void handleOperatorButtonClick(String operator) {
        calculatorService.storeOperator(operator);
    }

    public void handleClearButtonClick() {
        calculatorService.clearStoredOperatorAndNumber();
        calculatorService.updateDisplay(0);
    }

    public void clearStoredOperatorAndNumber() {
        calculatorService.clearStoredOperatorAndNumber();
    }

    public void updateDisplay(int value) {
        calculatorService.updateDisplay(value);
    }
}