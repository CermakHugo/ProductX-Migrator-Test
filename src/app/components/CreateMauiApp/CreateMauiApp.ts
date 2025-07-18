

import { App } from './App';
import { MauiApp } from './MauiApp';

export class CreateMauiApp {
  public static CreateMauiApp(): MauiApp {
    const builder = MauiApp.CreateBuilder();
    builder.UseMauiApp<App>();
    builder.ConfigureFonts(fonts =>
    {
      fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
      fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
    });
    return builder.Build();
  }
}