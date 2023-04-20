import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ProductosService } from '../../../services/productos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Mascota } from '../../interfaces/mascotas.interface';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'fotoUrl', 'estado', 'ver'];
  termino : string    = "available";
  mascotas: Mascota[] = [];
  hayError: boolean   = false;
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private router: Router,
                private productosService: ProductosService) { }

  ngOnInit(): void {
     this.hayError = false;
     this.productosService.getProductos( this.termino )
       .subscribe( mascotas => {
         this.mascotas = mascotas;
         this.dataSource = new MatTableDataSource<Mascota>(this.mascotas);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
  });
    
    
  }

  buscar() {
    this.hayError = false;
    this.productosService.getProductos( this.termino )
      .subscribe( mascotas => {
        this.mascotas = mascotas;
        this.dataSource = new MatTableDataSource<Mascota>(this.mascotas);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
        
      }, (err) => {
        this.hayError = true;
        this.mascotas = [];
    });
  }

  borrar( numero: number ) {
        this.productosService.deleteProductos( numero )
          .subscribe( mascotas => {
            console.log('Mascota '+mascotas+' borrada');
            
          });
        }
        

  editar( numero: number) {
    window.location.replace(`./productos/editar/${numero}`);
    // this.productosService.getMascotaPorId( numero )
    // .subscribe( mascotas => {
    //   console.log('Mascota '+mascotas+' borrada');
      
    // });
  }
}
