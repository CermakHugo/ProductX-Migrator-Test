

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateDisplayField } from '../actions';

class CalculatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorInstance: null,
      calculationResult: '',
      displayFieldState: ''
    };
  }

  handleInitialize = (handle, ownership) => {
    if (!ownership) {
      console.error('Ownership parameter is required');
      return;
    }
    axios.post('/initialize-calculator', { handle, ownership })
      .then(response => {
        this.setState({ calculatorInstance: response.data, displayFieldState: response.data.displayFieldState });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleAppendDigit = (digit) => {
    axios.post('/append-digit', { digit })
      .then(response => {
        if (response.status === 200) {
          this.setState({ calculationResult: response.data });
        } else {
          console.error('Failed to append digit');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleOperatorClick = (operator, calculation) => {
    axios.post('/append-operator', { operator, calculation })
      .then(response => {
        if (response.status === 200) {
          this.setState({ calculationResult: response.data });
        } else {
          console.error('Failed to append operator');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleCalculate = (calculation) => {
    axios.get('/evaluate-calculation', { params: { calculation } })
      .then(response => {
        if (response.status === 200) {
          this.setState({ calculationResult: response.data });
        } else {
          console.error('Failed to calculate');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleClick = () => {
    this.props.updateDisplayField();
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.displayFieldState} />
          <button type="submit">Submit</button>
        </form>
        <div>
          <button onClick={() => this.handleAppendDigit(1)}>1</button>
          <button onClick={() => this.handleAppendDigit(2)}>2</button>
          <button onClick={() => this.handleAppendDigit(3)}>3</button>
          <button onClick={() => this.handleOperatorClick('+')}>+</button>
          <button onClick={() => this.handleAppendDigit(4)}>4</button>
          <button onClick={() => this.handleAppendDigit(5)}>5</button>
          <button onClick={() => this.handleAppendDigit(6)}>6</button>
          <button onClick={() => this.handleOperatorClick('-')}>-</button>
          <button onClick={() => this.handleAppendDigit(7)}>7</button>
          <button onClick={() => this.handleAppendDigit(8)}>8</button>
          <button onClick={() => this.handleAppendDigit(9)}>9</button>
          <button onClick={() => this.handleOperatorClick('*')}>*</button>
          <button onClick={() => this.handleAppendDigit(0)}>0</button>
          <button onClick={() => this.handleOperatorClick('/')}>/</button>
          <button onClick={this.handleCalculate}>Calculate</button>
        </div>
        <div>
          <p>Result: {this.state.calculationResult}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { displayFieldState: state.displayFieldState };
};

export default connect(mapStateToProps, { updateDisplayField })(CalculatorComponent);