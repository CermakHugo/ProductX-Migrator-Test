

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalculatorComponent from '../components/CalculatorComponent';
import { calculate, percentage, clearButtonPress, appendDigit } from '../actions/calculator.actions';
import { bindActionCreators } from 'redux';
import calculatorReducer from '../reducers/calculator.reducer';
import axios from 'axios';
import { createStore, combineReducers } from 'redux';
import calculatorController from '../api/calculator.controller';

const store = createStore(combineReducers({ calculator: calculatorReducer }));

class CalculatorContainer extends Component {
  handleKeypadPress(key) {
    this.props.appendDigit(key);
  }

  calculate() {
    this.props.calculate();
  }

  percentage() {
    this.props.percentage();
  }

  handleClearButtonPress() {
    this.props.clearButtonPress();
  }

  onCalculate() {
    const { inputValues, operator } = this.props;
    axios.post('/calculator', { inputValues, operator })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleAppendDigit(digit) {
    this.props.appendDigit(digit);
  }

  mapStateToProps(state) {
    return {
      inputValues: state.calculator.inputValues,
      operator: state.calculator.operator,
      currentEntry: state.calculator.currentEntry
    };
  }

  mapDispatchToProps(dispatch) {
    return bindActionCreators({ calculate, percentage, clearButtonPress, appendDigit }, dispatch);
  }

  render() {
    return (
      <CalculatorComponent
        handleKeypadPress={this.handleKeypadPress.bind(this)}
        calculate={this.calculate.bind(this)}
        percentage={this.percentage.bind(this)}
        handleClearButtonPress={this.handleClearButtonPress.bind(this)}
        onCalculate={this.onCalculate.bind(this)}
        handleAppendDigit={this.handleAppendDigit.bind(this)}
        inputValues={this.props.inputValues}
        operator={this.props.operator}
        currentEntry={this.props.currentEntry}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);