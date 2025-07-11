

import { MauiProgramService } from './services/MauiProgramService';
import { CreateMauiAppComponent } from './components/CreateMauiApp/CreateMauiApp';
import { CalculatorApplicationWindowComponent } from './components/CalculatorApplicationWindow/CalculatorApplicationWindow';
import { CalculatorComponent } from './components/Calculator/Calculator';
import { CalculatorInterfaceComponent } from './components/CalculatorInterface/CalculatorInterface';
import { CreateMauiAppRoute } from './routes/CreateMauiAppRoute';
import { MauiApp } from './models/MauiApp';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(CreateMauiAppRoute)],
  declarations: [CreateMauiAppComponent, CalculatorApplicationWindowComponent, CalculatorComponent, CalculatorInterfaceComponent],
  providers: [MauiProgramService],
  bootstrap: [CreateMauiAppComponent]
})
export class AppModule { }