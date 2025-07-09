

const { Route, Routes } = require('react-router-dom');
const CalculatorService = require('./services/calculator.service');
const MauiProgramService = require('./MauiProgramService');

const CalculatorRoutes = () => {
  return (
    <Routes>
      <Route path="/calculator" element={<CalculatorService method="GET" />} />
      <Route path="/calculator/:id" element={<CalculatorService method="GET" />} />
      <Route path="/calculator" element={<CalculatorService method="POST" />} />
      <Route path="/calculator/:id" element={<CalculatorService method="POST" />} />
      <Route path="/maui-program" element={<MauiProgramService method="GET" />} />
      <Route path="/maui-program/:id" element={<MauiProgramService method="GET" />} />
      <Route path="/maui-program" element={<MauiProgramService method="POST" />} />
      <Route path="/maui-program/:id" element={<MauiProgramService method="POST" />} />
    </Routes>
  );
};

export default CalculatorRoutes;