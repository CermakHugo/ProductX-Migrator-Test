

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/App/App';
import { AppRoute } from './routes/AppRoute';
import { CalculatorService } from './services/CalculatorService';
import { UIApplicationService } from './services/UIApplicationService';
import { MauiProgramService } from './services/MauiProgramService';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(AppRoute)],
  providers: [CalculatorService, UIApplicationService, MauiProgramService],
  bootstrap: [AppComponent]
})
export class AppModule {}