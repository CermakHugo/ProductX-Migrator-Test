

export const GET_RESULT = 'GET_RESULT';

export function getResult(calculationData = {}) {
  if (!calculationData || typeof calculationData !== 'object') {
    throw new Error('Invalid calculation data');
  }

  return {
    type: GET_RESULT,
    payload: calculationData
  };
}