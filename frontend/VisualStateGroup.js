

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateVisualState, resetVisualState } from '../actions';

const initialState = {
  visualState: null,
  error: null,
};

const VisualStateGroup = ({ visualState, updateVisualState, resetVisualState }) => {
  const [currentState, setCurrentState] = useState(initialState);

  useEffect(() => {
    if (visualState !== null && visualState !== undefined) {
      setCurrentState({ visualState, error: null });
    }
  }, [visualState]);

  const handleUpdateVisualState = (newState) => {
    if (newState !== currentState.visualState) {
      try {
        updateVisualState(newState);
        setCurrentState({ visualState: newState, error: null });
      } catch (error) {
        setCurrentState({ visualState: currentState.visualState, error });
      }
    }
  };

  const handleResetVisualState = () => {
    try {
      resetVisualState();
      setCurrentState(initialState);
    } catch (error) {
      setCurrentState({ visualState: currentState.visualState, error });
    }
  };

  return (
    <div>
      <h2>Visual State Group</h2>
      {currentState.visualState !== null && currentState.visualState !== undefined ? (
        <p>Current State: {currentState.visualState}</p>
      ) : (
        <p>No visual state available</p>
      )}
      {currentState.error !== null ? (
        <p>Error: {currentState.error.message}</p>
      ) : null}
      <button onClick={() => handleUpdateVisualState('newState')}>Update Visual State</button>
      <button onClick={handleResetVisualState}>Reset Visual State</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { visualState: state.visualState };
};

export default connect(mapStateToProps, { updateVisualState, resetVisualState })(VisualStateGroup);