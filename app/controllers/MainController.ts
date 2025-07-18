

import React from 'react';
import { ProgramService } from '../services/ProgramService';

const MainController = () => {
  const programService = new ProgramService();
  programService.programFunction();

  return <div>Main Controller</div>;
};

export default MainController;