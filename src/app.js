const server = require('./server');
const utilityService = require('./services/utility.service');

const startServer = async () => {
  await server.start();
};

const performCalculations = async () => {
  const result = await utilityService.calculate();
  console.log(result);
};

startServer();
performCalculations();