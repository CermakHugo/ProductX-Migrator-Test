
import { localStorage } from 'localStorage';

const getPreviousNumber = () => {
  const previousNumber = localStorage.getItem('previousNumber');
  if (previousNumber === null) {
    return 0;
  }
  const parsedNumber = parseInt(previousNumber);
  if (isNaN(parsedNumber)) {
    throw new Error('Invalid number');
  }
  return parsedNumber;
};

export { getPreviousNumber };