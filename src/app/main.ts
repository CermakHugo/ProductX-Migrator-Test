

import { MauiProgram } from './MauiProgram';
import { UIApplication } from './UIApplication';
import { AppDelegate } from './AppDelegate';
import { MauiApp } from './MauiApp';

class Main {
  public width: number = 800;
  public height: number = 600;
  public backgroundColor: string = '#F7F7F7;
  public fontFamily: string = 'Segoe UI';
  public fontSize: number = 14;

  constructor(private mauiProgram: MauiProgram) {}

  public Main(args: string[]): void {
    UIApplication.Main(args, null, typeof(AppDelegate));
  }

  public initializeMauiApp(): void {
    this.mauiProgram.window.width = this.width;
    this.mauiProgram.window.height = this.height;
    this.mauiProgram.window.backgroundColor = this.backgroundColor;
    this.mauiProgram.window.fontFamily = this.fontFamily;
    this.mauiProgram.window.fontSize = this.fontSize;
  }

  public createMauiApp(): MauiApp {
    return new MauiApp();
  }
}

export default Main;