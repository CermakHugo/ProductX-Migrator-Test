

import React, { Component } from 'react';
import CalculatorService from '../../services/CalculatorService';

class CalculatorMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCalculation: '',
      resultText: '',
      gridRows: 5,
      gridColumns: 4,
      gridWidth: 700,
      gridHeight: 500,
      windowWidth: 800,
      windowHeight: 600,
      calculatorService: new CalculatorService(),
      number1: 0,
      number2: 0,
      operation: '',
      result: 0
    };
  }

  renderGrid = () => {
    const { gridRows, gridColumns, gridWidth, gridHeight } = this.state;
    const calculations = this.state.calculatorService.getCalculations();
    const results = this.state.calculatorService.getResults();

    return (
      <div style={{ width: gridWidth, height: gridHeight }}>
        {calculations.map((calculation, index) => (
          <div key={index} style={{ gridRow: index + 1, gridColumn: 1 }}>
            <TextBlock text={calculation} />
          </div>
        ))}
        {results.map((result, index) => (
          <div key={index} style={{ gridRow: index + 1, gridColumn: 2 }}>
            <TextBlock text={result} />
          </div>
        ))}
      </div>
    );
  };

  renderWindow = () => {
    const { windowWidth, windowHeight } = this.state;

    return (
      <div style={{ width: windowWidth, height: windowHeight }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>Calculator</div>
          <button onClick={this.handleCloseClick}>Close</button>
        </div>
        {this.renderGrid()}
      </div>
    );
  };

  launchApplication = () => {
    const calculations = this.state.calculatorService.getCalculations();
    const results = this.state.calculatorService.getResults();

    this.setState({
      currentCalculation: calculations.join(' '),
      resultText: results.join(' ')
    });
  };

  handleNumber1Change = event => {
    this.setState({ number1: event.target.value });
  };

  handleNumber2Change = event => {
    this.setState({ number2: event.target.value });
  };

  handleOperationChange = event => {
    this.setState({ operation: event.target.value });
  };

  handleCalculateClick = () => {
    this.calculate();
  };

  calculate = () => {
    const { number1, number2, operation } = this.state;
    let result = 0;

    switch (operation) {
      case 'add':
        result = number1 + number2;
        break;
      case 'subtract':
        result = number1 - number2;
        break;
      case 'multiply':
        result = number1 * number2;
        break;
      case 'divide':
        result = number1 / number2;
        break;
      default:
        break;
    }

    this.setState({ result, resultText: `Result: ${result}` });
  };

  render() {
    return (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <label>Number 1:</label>
            <input type="number" value={this.state.number1} onChange={this.handleNumber1Change} />
          </div>
          <div>
            <label>Number 2:</label>
            <input type="number" value={this.state.number2} onChange={this.handleNumber2Change} />
          </div>
          <div>
            <label>Operation:</label>
            <select value={this.state.operation} onChange={this.handleOperationChange}>
              <option value="add">Add</option>
              <option value="subtract">Subtract</option>
              <option value="multiply">Multiply</option>
              <option value="divide">Divide</option>
            </select>
          </div>
          <div>
            <button onClick={this.handleCalculateClick}>Calculate</button>
          </div>
          <label>{this.state.resultText}</label>
        </div>
        {this.renderWindow()}
      </div>
    );
  }
}

export default CalculatorMainPage;