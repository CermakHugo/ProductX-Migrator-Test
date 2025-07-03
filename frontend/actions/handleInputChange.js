export const HANDLE_INPUT = 'HANDLE_INPUT';

export const handleInputChange = (input) => {
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    const payload = typeof input === 'string' ? input.trim() : input;

    return {
        type: HANDLE_INPUT,
        payload
    }
}

