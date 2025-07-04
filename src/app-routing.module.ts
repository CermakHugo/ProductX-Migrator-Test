

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './components/App/App.component';

const routes: Routes = [{ path: '', component: App }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }