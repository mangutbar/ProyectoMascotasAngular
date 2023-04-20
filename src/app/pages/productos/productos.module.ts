import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductosRoutingModule } from './productos-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';


import { ListadoComponent } from './listado/listado.component';
import { MenuComponent } from './menu/menu.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';



@NgModule({
  declarations: [
    EditarProductoComponent,
    ListadoComponent,
    MenuComponent,
    CrearProductoComponent,
  ],
  exports: [
    ListadoComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    FlexLayoutModule,
    ProductosRoutingModule,
    FormsModule
  ]
})
export class ProductosModule { }
