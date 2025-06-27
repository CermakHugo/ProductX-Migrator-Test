

```javascript
const HANDLE_INPUT = 'HANDLE_INPUT';

const initialState = {
  currentEntry: ''
};

const handleInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT:
      return { ...state, currentEntry: action.payload };
    default:
      return state;
  }
};

export default handleInputReducer;
```