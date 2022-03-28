import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { AnimalesComponent } from './pages/animales/animales.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { SubastasComponent } from './pages/subastas/subastas.component';
import { IncidenciasComponent } from './pages/incidencias/incidencias.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    AnimalesComponent,
    NumerosComponent,
    UsuariosComponent,
    SubastasComponent,
    IncidenciasComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
