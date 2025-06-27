

import React, { useState, useEffect } from 'react';
import { CalculatorService } from '../services/calculator.service';

const CalculatorTabSwitcher = () => {
  const [currentTab, setCurrentTab] = useState('tab1');
  const [isTabSwitching, setIsTabSwitching] = useState(false);
  const [error, setError] = useState(null);

  const handleTabSwitch = async (tab) => {
    setIsTabSwitching(true);
    try {
      await CalculatorService.updateCalculatorTab(tab);
      setCurrentTab(tab);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsTabSwitching(false);
    }
  };

  useEffect(() => {
    CalculatorService.getCalculatorTab().then((tab) => setCurrentTab(tab));
  }, []);

  return (
    <div className="tab-switcher">
      {isTabSwitching ? (
        <p>Switching tabs...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <button
            className={currentTab === 'tab1' ? 'active' : ''}
            onClick={() => handleTabSwitch('tab1')}
          >
            Tab 1
          </button>
          <button
            className={currentTab === 'tab2' ? 'active' : ''}
            onClick={() => handleTabSwitch('tab2')}
          >
            Tab 2
          </button>
          <button
            className={currentTab === 'tab3' ? 'active' : ''}
            onClick={() => handleTabSwitch('tab3')}
          >
            Tab 3
          </button>
        </>
      )}
    </div>
  );
};

export default CalculatorTabSwitcher;