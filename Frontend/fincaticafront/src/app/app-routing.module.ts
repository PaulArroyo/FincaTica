import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'animales',
    loadChildren: () =>
      import('./animales/animales.module').then((m) => m.AnimalesModule),
  },
  {
    path: 'colores',
    loadChildren: () =>
      import('./colores/colores.module').then((m) => m.ColoresModule),
  },
  {
    path: 'numeros',
    loadChildren: () =>
      import('./numeros/numeros.module').then((m) => m.NumerosModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
