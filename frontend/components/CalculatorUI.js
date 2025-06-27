

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CalculatorUI() {
  const [state, setState] = useState({
    display: '',
    buttons: [],
  });

  useEffect(() => {
    axios.get('/api/calculator/init')
      .then(response => {
        setState(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleButtonClick = (button) => {
    switch (button.value) {
      case '=':
        try {
          const result = eval(state.display);
          setState({ ...state, display: result.toString() });
        } catch (error) {
          setState({ ...state, display: 'Error' });
        }
        break;
      case 'C':
        setState({ ...state, display: '' });
        break;
      default:
        setState({ ...state, display: state.display + button.value });
    }
  };

  return (
    <div className="calculator-ui">
      <input type="text" value={state.display} readOnly />
      <div className="button-grid">
        {state.buttons.map((button) => (
          <button key={button.id} onClick={() => handleButtonClick(button)}>
            {button.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalculatorUI;