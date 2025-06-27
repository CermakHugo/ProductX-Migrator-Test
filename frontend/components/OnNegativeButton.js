

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { onNegativeAction } from '../actions';

const OnNegativeButton = ({ onNegative }) => {
    const [result, setResult] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);

    const handleClick = () => {
        onNegative(inputValue)
            .then((result) => setResult(result))
            .catch((error) => setError(error));
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter input value"
            />
            <button onClick={handleClick}>OnNegative</button>
            {result && <p>Result: {result}</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onNegative: (inputValue) => dispatch(onNegativeAction(inputValue)),
});

export default connect(null, mapDispatchToProps)(OnNegativeButton);