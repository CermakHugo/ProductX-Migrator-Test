

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClearCurrentEntryButton = () => {
    const [currentEntry, setCurrentEntry] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        if (Object.keys(currentEntry).length === 0) return;

        setLoading(true);
        try {
            const response = await axios.post('/clearCurrentEntry', currentEntry);
            if (response.status === 200) {
                setCurrentEntry({});
            } else {
                setError(`Error clearing current entry: ${response.statusText}`);
            }
        } catch (error) {
            setError(`Error clearing current entry: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleClick} disabled={loading}>
            {loading ? 'Clearing...' : 'Clear Current Entry'}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </button>
    );
};

export default ClearCurrentEntryButton;