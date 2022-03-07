import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColoresRoutingModule } from './colores-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ColoresRoutingModule
  ]
})
export class ColoresModule { }
