import React, { Component } from 'react';

interface Button {
  label: string;
  onClick: () => void;
}

interface State {
  currentCalculation: string;
  result: string;
  previousOperation: string | null;
  currentNumber: string;
  title: string;
  width: number;
  height: number;
}

class Calculator extends Component<{}, State> {
  state = {
    currentCalculation: '',
    result: '',
    previousOperation: null,
    currentNumber: '',
    title: 'Calculator',
    width: 400,
    height: 300,
  };

  buttons: Button[] = [
    { label: '0', onClick: () => this.handleNumberButtonClick('0') },
    { label: '1', onClick: () => this.handleNumberButtonClick('1') },
    { label: '2', onClick: () => this.handleNumberButtonClick('2') },
    { label: '3', onClick: () => this.handleNumberButtonClick('3') },
    { label: '4', onClick: () => this.handleNumberButtonClick('4') },
    { label: '5', onClick: () => this.handleNumberButtonClick('5') },
    { label: '6', onClick: () => this.handleNumberButtonClick('6') },
    { label: '7', onClick: () => this.handleNumberButtonClick('7') },
    { label: '8', onClick: () => this.handleNumberButtonClick('8') },
    { label: '9', onClick: () => this.handleNumberButtonClick('9') },
    { label: '+', onClick: () => this.handleOperatorButtonClick('+') },
    { label: '-', onClick: () => this.handleOperatorButtonClick('-') },
    { label: '*', onClick: () => this.handleOperatorButtonClick('*') },
    { label: '/', onClick: () => this.handleOperatorButtonClick('/') },
    { label: 'C', onClick: () => this.handleClearButtonClick() },
    { label: '=', onClick: () => this.handleEqualsButtonClick() },
    { label: '1', onClick: () => this.handleButtonClick('1') },
    { label: '2', onClick: () => this.handleButtonClick('2') },
    { label: '3', onClick: () => this.handleButtonClick('3') },
    { label: '4', onClick: () => this.handleButtonClick('4') },
  ];

  constructor(props: {}) {
    super(props);
    this.state = {
      currentCalculation: '',
      result: '',
      previousOperation: null,
      currentNumber: '',
      title: 'Calculator',
      width: 400,
      height: 300,
    };
  }

  handleButtonClick = (buttonLabel: string) => {
    switch (buttonLabel) {
      case '1':
        this.setState({ title: 'Calculator' });
        break;
      case '2':
        this.setState({ width: 800 });
        break;
      case '3':
        this.setState({ height: 600 });
        break;
      case '4':
        this.setState({ title: 'Calculator', width: 800, height: 600 });
        break;
      default:
        break;
    }
  };

  handleNumberButtonClick = (number: string) => {
    this.setState({
      currentCalculation: this.state.currentCalculation + number,
      result: this.state.currentCalculation + number,
    });
  };

  handleOperatorButtonClick = (operator: string) => {
    this.setState({
      currentCalculation: this.state.currentCalculation + operator,
      previousOperation: operator,
      currentNumber: '',
    });
  };

  handleClearButtonClick = () => {
    this.setState({
      currentCalculation: '',
      result: '',
      previousOperation: null,
      currentNumber: '',
    });
  };

  handleEqualsButtonClick = () => {
    const result = this.calculateResult();
    this.setState({ result, currentCalculation: '' });
  };

  calculateResult = () => {
    if (this.state.previousOperation === '+') {
      return parseInt(this.state.currentCalculation) + parseInt(this.state.currentNumber);
    } else if (this.state.previousOperation === '-') {
      return parseInt(this.state.currentCalculation) - parseInt(this.state.currentNumber);
    } else if (this.state.previousOperation === '*') {
      return parseInt(this.state.currentCalculation) * parseInt(this.state.currentNumber);
    } else if (this.state.previousOperation === '/') {
      return parseInt(this.state.currentCalculation) / parseInt(this.state.currentNumber);
    }
    return 0;
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div style={{ width: this.state.width, height: this.state.height }}>
          <input type="text" value={this.state.currentCalculation} readOnly />
          <div>
            {this.buttons.map((button, index) => (
              <button key={index} onClick={button.onClick}>
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;