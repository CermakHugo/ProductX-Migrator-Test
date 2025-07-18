

import React from 'react';

interface CalculatorAppState {
  currentCalculation: string;
  result: string;
}

interface CalculatorAppProps {
  // Add props if needed
}

class CalculatorApp extends React.Component<CalculatorAppProps, CalculatorAppState> {
  constructor(props: CalculatorAppProps) {
    super(props);
    this.state = { currentCalculation: '', result: '0' };
    this.InitializeComponent();
  }

  handleNumberClick = (number: string) => {
    this.setState({ currentCalculation: this.state.currentCalculation + number });
  };

  handleOperatorClick = (operator: string) => {
    this.setState({ currentCalculation: this.state.currentCalculation + operator });
  };

  handleClearClick = () => {
    this.setState({ currentCalculation: '', result: '0' });
  };

  InitializeComponent = () => {
    const currentCalculationLabel = document.getElementById('CurrentCalculation');
    const resultTextLabel = document.getElementById('resultText');
    const keypad = document.querySelector('.keypad');
    const buttons = keypad.querySelectorAll('button');

    currentCalculationLabel.style.fontSize = '24px';
    currentCalculationLabel.style.fontWeight = 'bold';
    resultTextLabel.style.fontSize = '36px';
    resultTextLabel.style.fontWeight = 'bold';

    buttons.forEach((button) => {
      button.style.width = '60px';
      button.style.height = '60px';
      button.style.margin = '10px';
      button.style.borderRadius = '10px';
      button.style.background = '#f0f0f0';
      button.style.color = '#333';
      button.style.border = 'none';
      button.style.cursor = 'pointer';

      button.addEventListener('click', () => {
        if (button.classList.contains('number-button')) {
          this.OnSelectNumber(button.textContent);
        } else if (button.classList.contains('operator-button')) {
          this.handleOperatorClick(button.textContent);
        } else if (button.classList.contains('action-button')) {
          if (button.textContent === 'C') {
            this.handleClearClick();
          }
        }
      });
    });
  };

  OnSelectNumber = (number: string) => {
    this.setState({ currentCalculation: this.state.currentCalculation + number });
  };

  render() {
    return (
      <div className="grid-container">
        <Header className="header">
          <Label id="CurrentCalculation" className="current-calculation">{this.state.currentCalculation}</Label>
          <Label id="resultText" className="result-text">{this.state.result}</Label>
          <BoxView className="horizontal-line" />
        </Header>
        <Keypad className="keypad">
          <Button className="number-button" onClick={() => this.OnSelectNumber('7')}>7</Button>
          <Button className="number-button" onClick={() => this.OnSelectNumber('8')}>8</Button>
          <Button className="number-button" onClick={() => this.OnSelectNumber('9')}>9</Button>
          <Button className="operator-button" onClick={() => this.handleOperatorClick('+')}>+</Button>
          <Button className="number-button" onClick={() => this.OnSelectNumber('4')}>4</Button>
          <Button className="number-button" onClick={() => this.OnSelectNumber('5')}>5</Button>
          <Button className="number-button" onClick={() => this.OnSelectNumber('6')}>6</Button>
          <Button className="operator-button" onClick={() => this.handleOperatorClick('-')}>-</Button>
          <Button className="number-button" onClick={() => this.OnSelectNumber('1')}>1</Button>
          <Button className="number-button" onClick={() => this.OnSelectNumber('2')}>2</Button>
          <Button className="number-button" onClick={() => this.OnSelectNumber('3')}>3</Button>
          <Button className="operator-button" onClick={() => this.handleOperatorClick('*')}>×</Button>
          <Button className="action-button" onClick={this.handleClearClick}>C</Button>
          <Button className="action-button">+/-</Button>
          <Button className="action-button">%</Button>
          <Button className="operator-button" onClick={() => this.handleOperatorClick('/')}>/</Button>
        </Keypad>
        <Footer className="footer" />
      </div>
    );
  }
}

export default CalculatorApp;