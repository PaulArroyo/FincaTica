import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalesRoutingModule } from './animales-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AnimalesRoutingModule
  ]
})
export class AnimalesModule { }
