import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumerosRoutingModule } from './numeros-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NumerosRoutingModule
  ]
})
export class NumerosModule { }
