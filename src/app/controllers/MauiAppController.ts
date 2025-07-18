

import { App } from '../app';
import { MauiApp } from '@maui/app';
import { MauiAppBuilder } from '@maui/app-builder';
import { Fonts } from '../fonts';
import { CalculatorService } from '../services/calculator.service';
import { UtilityService } from '../services/utility.service';
import { CalculatorComponent } from '../components/calculator.component';
import { ContentPage } from '../pages/content.page';

class MauiAppController {
  static CreateMauiApp() {
    const builder = MauiApp.CreateBuilder();
    builder.UseMauiApp<App>();
    builder.ConfigureFonts(fonts => {
      fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
      fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
    });
    return builder.Build();
  }

  Run(args: string[]) {
    // No explicit checks or validation on the 'args' array
  }

  ConfigureFonts(fonts) {
    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
    fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
  }

  UseMauiApp(app: App) {
    return this.SetMauiApp(app);
  }

  SetMauiApp(app: App) {
    return this.mauiAppBuilder.UseMauiApp(app);
  }

  FormatDecimal() {
    return UtilityService.FormatDecimal();
  }

  GetResultText() {
    return CalculatorService.getResultText();
  }

  UpdateResultText() {
    return CalculatorService.updateResultText();
  }

  ClearResultText() {
    return CalculatorService.clearResultText();
  }

  AppendNumberToResultText() {
    return CalculatorService.appendNumberToResultText();
  }

  GetConfiguration() {
    return ContentPage.configuration;
  }

  SelectNumber(number) {
    // Update currentEntry and resultText.Text based on the provided number value
  }

  SelectOperator(operator) {
    // Update mathOperator and currentState based on the provided operator value
  }

  CalculateResultText() {
    return CalculatorComponent.calculateResultText();
  }
}

export default MauiAppController;