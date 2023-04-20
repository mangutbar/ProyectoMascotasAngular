import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from './listado/listado.component';
import { MenuComponent } from './menu/menu.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'editar/:id', component: EditarProductoComponent },
      { path: 'crear-producto', component: CrearProductoComponent },
      { path: '**', redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
