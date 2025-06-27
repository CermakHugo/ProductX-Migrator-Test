

import React, { useState } from 'react';
import Keypad from './Keypad';
import DisplayField from './DisplayField';
import TabbedPageLayout from './TabbedPageLayout';

const TabbedPage = () => {
  const [displayField, setDisplayField] = useState('');
  const [currentTab, setCurrentTab] = useState('tab1');
  const [tabs, setTabs] = useState({
    tab1: '',
    tab2: '',
    tab3: '',
  });
  const [result, setResult] = useState('');

  const handleKeypadButtonPress = (buttonValue) => {
    if (currentTab === 'tab1') {
      setTabs({ ...tabs, tab1: tabs.tab1 + buttonValue });
    } else if (currentTab === 'tab2') {
      setTabs({ ...tabs, tab2: tabs.tab2 + buttonValue });
    } else if (currentTab === 'tab3') {
      setTabs({ ...tabs, tab3: tabs.tab3 + buttonValue });
    }
    updateDisplayField();
  };

  const handleCalculate = () => {
    let calculation = '';
    if (currentTab === 'tab1') {
      calculation = tabs.tab1;
    } else if (currentTab === 'tab2') {
      calculation = tabs.tab2;
    } else if (currentTab === 'tab3') {
      calculation = tabs.tab3;
    }
    const result = eval(calculation);
    setResult(result);
    displayResult(result);
  };

  const handleTabSwitch = (tab) => {
    setCurrentTab(tab);
    updateDisplayField();
  };

  const updateDisplayField = () => {
    if (currentTab === 'tab1') {
      setDisplayField(tabs.tab1);
    } else if (currentTab === 'tab2') {
      setDisplayField(tabs.tab2);
    } else if (currentTab === 'tab3') {
      setDisplayField(tabs.tab3);
    }
  };

  const displayResult = (result) => {
    setDisplayField(result.toString());
  };

  return (
    <TabbedPageLayout
      currentTab={currentTab}
      handleTabSwitch={handleTabSwitch}
    >
      <Keypad
        handleKeypadButtonPress={handleKeypadButtonPress}
        handleCalculate={handleCalculate}
      />
      <DisplayField displayField={displayField} result={result} />
    </TabbedPageLayout>
  );
};

export default TabbedPage;