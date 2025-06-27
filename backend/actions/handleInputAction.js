

export const HANDLE_INPUT = 'HANDLE_INPUT';

export const handleInputAction = (input) => {
    return {
        type: HANDLE_INPUT,
        payload: input
    }
}