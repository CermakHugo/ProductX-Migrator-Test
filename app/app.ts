

import { CalculatorService } from './services/CalculatorService';
import { UtilityService } from './services/UtilityService';
import { ProgramService } from './services/ProgramService';

const calculatorService = new CalculatorService();
const utilityService = new UtilityService();
const programService = new ProgramService();

calculatorService.calculate();
utilityService.utilityFunction();
programService.programFunction();