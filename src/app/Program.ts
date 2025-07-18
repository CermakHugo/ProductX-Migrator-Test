

import { App } from './App';
import { Application } from 'maui';

class Program {
  async Run() {
    const app = new Application({
      App,
    });
    await app.start();
  }
}

const program = new Program();
program.Run();