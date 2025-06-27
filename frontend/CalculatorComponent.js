

import React from 'react';
import ReactDOM from 'react-dom';
import { setupUIComponents } from './calculator.service';

class CalculatorComponent {
  render() {
    const uiComponents = setupUIComponents();
    return (
      <div>
        <input type="text" value={uiComponents.displayValue} onChange={uiComponents.handleInputChange} />
        <div>
          {uiComponents.buttons.map((button, index) => (
            <button key={index} onClick={button.onClick}>{button.label}</button>
          ))}
        </div>
        <div>
          <span>{uiComponents.displayValue}</span>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CalculatorComponent />, document.getElementById('root'));