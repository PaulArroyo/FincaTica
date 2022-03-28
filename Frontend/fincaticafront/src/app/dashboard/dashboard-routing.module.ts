import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AnimalesComponent } from './pages/animales/animales.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { SubastasComponent } from './pages/subastas/subastas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'animales', component: AnimalesComponent },
      { path: 'numeros', component: NumerosComponent },
      { path: 'subastas', component: SubastasComponent },
      { path: 'usuarios', component: UsuariosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
