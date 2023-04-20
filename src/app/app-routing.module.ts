import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{
  path: 'dashboard',
  loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule)
},
{
  path: 'productos',
  loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosModule)
},
{
  path: '**',
  redirectTo: 'productos'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
