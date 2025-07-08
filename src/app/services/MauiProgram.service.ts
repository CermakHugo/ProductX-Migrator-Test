

import { Injectable } from '@angular/core';
import { MauiApp } from './MauiApp';

@Injectable({
  providedIn: 'root'
})
export class MauiProgramService {

  createMauiApp(): MauiApp {
    return new MauiApp();
  }

}