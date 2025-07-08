

import server from './server';
import utilityService from './utilityService';

const startServer = async () => {
  await server.start();
};

const performCalculations = async () => {
  const result = await utilityService.calculate();
  console.log(result);
};

startServer();
performCalculations();