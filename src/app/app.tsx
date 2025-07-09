

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CalculatorMainPage from './components/CalculatorMainPage/CalculatorMainPage';
import Calculator from './components/Calculator/Calculator';
import CalculatorMainScreen from './components/CalculatorMainScreen/CalculatorMainScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/calculator" component={CalculatorMainPage} />
        <Route path="/calculator/main" component={CalculatorMainScreen} />
        <Route path="/calculator/calculator" component={Calculator} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;