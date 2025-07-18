

import React, { useEffect } from 'react';
import StartApplication from './StartApplication';

const App = () => {
  useEffect(() => {
    try {
      StartApplication();
    } catch (error) {
      console.error('Error starting application:', error);
    }
  }, []);

  return (
    <div>
      {/* Add your JSX content here */}
    </div>
  );
};

export default App;