

import { useState } from 'react';

const initialState = {
  title: '',
  description: '',
};

const AppService = () => {
  const [state, setState] = useState(initialState);

  const updateTitleAndDescription = (title, description) => {
    if (title && description) {
      try {
        setState({ ...state, title, description });
      } catch (error) {
        console.error('Error updating state:', error);
      }
    } else {
      console.error('Title and description are required');
    }
  };

  return { state, updateTitleAndDescription };
};

export default AppService;