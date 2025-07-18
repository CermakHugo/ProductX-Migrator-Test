

import { UtilityService } from './UtilityService';
import { CalculatorService } from './CalculatorService';
import { ContentPage } from './ContentPage';
import { Program } from './Program';

export class MainController {
  static Main(args: string[]) {
    const app = new Program();
    app.Run(args);
  }

  InitializeCalculator() {
    const calculatorService = new CalculatorService();
    calculatorService.InitializeCalculator();
  }

  PerformCalculation() {
    const calculatorService = new CalculatorService();
    calculatorService.PerformCalculation();
  }

  ResetCalculator() {
    const calculatorService = new CalculatorService();
    calculatorService.ResetCalculator();
  }

  getLayout() {
    const contentPage = new ContentPage();
    return contentPage.getLayout();
  }

  getBehavior() {
    const contentPage = new ContentPage();
    return contentPage.getBehavior();
  }

  InitializeComponent() {
    const contentPage = new ContentPage();
    contentPage.InitializeComponent();
  }

  ToTrimmedString() {
    const utilityService = new UtilityService();
    return utilityService.ToTrimmedString();
  }
}