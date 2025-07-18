

import { enableProdMode } from '@angular/core'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { AppModule } from './app/app.module'; 

class Main {
  static Main(args: string[]) {
    const app = new Program();
    app.Run(args);
  }
}

class MainPage {
  constructor() {
    this.InitializeComponent();
  }

  InitializeComponent() {
    // Initialize ContentPage element
  }
}

class Program {
  Run(args: string[]) {
    // Run the application
  }
}

function InitializeApplication() {
  const args = process.argv.slice(2);
  const app = new Program();
  app.Run(args);
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

Main.Main(process.argv.slice(2));