import React from 'react';

interface HeaderProps {
  currentCalculation: string;
  result: number;
}

const Header: React.FC<HeaderProps> = ({ currentCalculation, result }) => {
  return (
    <div id="header" className="header">
      <label id="CurrentCalculation" htmlFor="CurrentCalculation">
        Current Calculation:
      </label>
      <label id="resultText" htmlFor="resultText">
        {result}
      </label>
      <div id="BoxView" className="box-view"></div>
    </div>
  );
};

export default Header;
