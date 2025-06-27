

import React from 'react';
import PropTypes from 'prop-types';

const CalculatorResult = (props) => {
    const { result } = props;

    if (!result) {
        return null;
    }

    if (typeof result !== 'string') {
        return <div>Error: Invalid result type</div>;
    }

    return (
        <div>
            <h2>Result:</h2>
            <p>{result}</p>
        </div>
    );
};

CalculatorResult.propTypes = {
    result: PropTypes.string,
};

CalculatorResult.defaultProps = {
    result: '',
};

export default CalculatorResult;