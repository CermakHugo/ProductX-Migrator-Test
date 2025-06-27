

import React, { useState } from 'react';
import axios from 'axios';

const PercentageButton = () => {
    const [entryValue, setEntryValue] = useState('');
    const [calculatedPercentage, setCalculatedPercentage] = useState('');
    const [error, setError] = useState(null);

    const handleButtonClick = () => {
        if (!entryValue || isNaN(entryValue)) {
            setError('Invalid entry value');
            return;
        }

        axios.post('/percentage', { entryValue })
            .then(response => {
                if (response.data && response.data.percentage) {
                    setCalculatedPercentage(response.data.percentage);
                } else {
                    setError('Invalid response from API');
                }
            })
            .catch(error => {
                setError('Error calculating percentage: ' + error.message);
            });
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                Percentage
            </button>
            {calculatedPercentage && (
                <p>Calculated percentage: {calculatedPercentage}</p>
            )}
            {error && (
                <p style={{ color: 'red' }}>{error}</p>
            )}
        </div>
    );
};

export default PercentageButton;