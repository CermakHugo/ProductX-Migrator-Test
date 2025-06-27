

import React from 'react';
import { connect } from 'react-redux';
import { getTime } from '../actions/timeActions';

const TimeDisplay = ({ time, getTime, error }) => {
  React.useEffect(() => {
    getTime();
  }, [getTime]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!time) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Current Time: {time}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  time: state.time,
  error: state.error,
});

export default connect(mapStateToProps, { getTime })(TimeDisplay);