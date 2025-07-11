

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import * as express from 'express';

const app = express();
app.use(express.static('public'));
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

platformBrowserDynamic().bootstrapModule(AppModule);