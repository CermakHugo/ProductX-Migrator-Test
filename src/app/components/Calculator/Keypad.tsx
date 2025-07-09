

import React, { Component } from 'react';

class Keypad extends Component {
  operations = ['+', '-', '*', '/'];

handleKeyPress = (event) => {
  const { key } = event;
  if (key >= '0' && key <= '9') {
    this.props.enterOperand(parseInt(key, 10));
  } else if (this.operations.includes(key)) {
    this.props.selectOperation(key);
  }
};

handleOperationClick = (operation) => {
  if (this.operations.includes(operation)) {
    this.props.selectOperation(operation);
  }
};

handleOperandClick = (operand) => {
  if (typeof operand === 'number') {
    this.props.enterOperand(operand);
  }
};

render() {
  return (
    <div>
      <button onClick={() => this.handleOperandClick(7)}>7</button>
      <button onClick={() => this.handleOperandClick(8)}>8</button>
      <button onClick={() => this.handleOperandClick(9)}>9</button>
      <button onClick={() => this.handleOperationClick('/')}>/</button>
      <button onClick={() => this.handleOperandClick(4)}>4</button>
      <button onClick={() => this.handleOperandClick(5)}>5</button>
      <button onClick={() => this.handleOperandClick(6)}>6</button>
      <button onClick={() => this.handleOperationClick('*')}>*</button>
      <button onClick={() => this.handleOperandClick(1)}>1</button>
      <button onClick={() => this.handleOperandClick(2)}>2</button>
      <button onClick={() => this.handleOperandClick(3)}>3</button>
      <button onClick={() => this.handleOperationClick('-')}>-</button>
      <button onClick={() => this.handleOperandClick(0)}>0</button>
      <button onClick={() => this.handleOperandClick('.')}>.</button>
      <button onClick={() => this.handleOperationClick('+')}>+</button>
    </div>
  );
}

export default Keypad;