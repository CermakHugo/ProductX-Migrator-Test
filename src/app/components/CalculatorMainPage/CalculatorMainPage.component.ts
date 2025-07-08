

import React, { useState } from 'react';
import MauiApp from './MauiApp';
import CalculatorUI from './CalculatorUI';
import CalculatorService from './CalculatorService';
import './CalculatorMainPage.component.css';

interface CalculatorState {
  currentCalculation: string;
  result: string;
}

class CalculatorMainPage extends React.Component {
  gridWidth: number = 700;
  gridHeight: number = 500;
  gridRows: number = 5;
  gridColumns: number = 4;
  rowHeight: number = 50;
  columnWidth: number = 150;
  textBlockSize: number = 24;
  textColor: string = 'black';

  constructor(props: any) {
    super(props);
    this.state = {
      currentCalculation: '',
      result: '0'
    };
  }

  createGrid = () => {
    const grid = document.createElement('grid');
    grid.style.width = `${this.gridWidth}px`;
    grid.style.height = `${this.gridHeight}px`;
    grid.style.gridTemplateRows = `repeat(${this.gridRows}, ${this.rowHeight}px)`;
    grid.style.gridTemplateColumns = `repeat(${this.gridColumns}, ${this.columnWidth}px)`;
    return grid;
  };

  addTextBlockToGrid = (row: number, column: number, text: string) => {
    const textBlock = document.createElement('textblock');
    textBlock.style.fontSize = `${this.textBlockSize}px`;
    textBlock.style.color = this.textColor;
    textBlock.textContent = text;
    const grid = this.createGrid();
    grid.appendChild(textBlock);
    grid.style.gridRow = `${row}`;
    grid.style.gridColumn = `${column}`;
  };

  handleNumberClick = (value: string) => {
    this.setState({ currentCalculation: this.state.currentCalculation + value });
  };

  handleOperatorClick = (operator: string) => {
    this.setState({ currentCalculation: this.state.currentCalculation + operator });
  };

  handleEqualsClick = () => {
    const calculatorService = new CalculatorService();
    const result = calculatorService.calculate(this.state.currentCalculation);
    this.setState({ result });
  };

  render() {
    return (
      <MauiApp>
        <CalculatorUI />
        <div className="calculator-interface">
          <div className="input-field" id="CurrentCalculation">{this.state.currentCalculation}</div>
          <div className="output-field" id="resultText">{this.state.result}</div>
          <div className="numerical-button" id="7" onClick={() => this.handleNumberClick('7')}>7</div>
          <div className="numerical-button" id="8" onClick={() => this.handleNumberClick('8')}>8</div>
          <div className="numerical-button" id="9" onClick={() => this.handleNumberClick('9')}>9</div>
          <div className="operator-button" id="÷" onClick={() => this.handleOperatorClick('÷')}>÷</div>
          <div className="numerical-button" id="4" onClick={() => this.handleNumberClick('4')}>4</div>
          <div className="numerical-button" id="5" onClick={() => this.handleNumberClick('5')}>5</div>
          <div className="numerical-button" id="6" onClick={() => this.handleNumberClick('6')}>6</div>
          <div className="operator-button" id="×" onClick={() => this.handleOperatorClick('×')}>×</div>
          <div className="numerical-button" id="1" onClick={() => this.handleNumberClick('1')}>1</div>
          <div className="numerical-button" id="2" onClick={() => this.handleNumberClick('2')}>2</div>
          <div className="numerical-button" id="3" onClick={() => this.handleNumberClick('3')}>3</div>
          <div className="operator-button" id="-" onClick={() => this.handleOperatorClick('-')}>-</div>
          <div className="numerical-button" id="00" onClick={() => this.handleNumberClick('00')}>00</div>
          <div className="numerical-button" id="0" onClick={() => this.handleNumberClick('0')}>0</div>
          <div className="numerical-button" id="." onClick={() => this.handleNumberClick('.')}>.</div>
          <div className="operator-button" id="+" onClick={() => this.handleOperatorClick('+')}>+</div>
          <div className="equals-button" id="=" onClick={this.handleEqualsClick}>=</div>
        </div>
      </MauiApp>
    );
  }
}

export default CalculatorMainPage;