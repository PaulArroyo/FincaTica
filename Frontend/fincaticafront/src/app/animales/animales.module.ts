import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalesRoutingModule } from './animales-routing.module';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, AnimalesRoutingModule],
})
export class AnimalesModule {}
