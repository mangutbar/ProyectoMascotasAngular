import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mascota, Status } from '../../interfaces/mascotas.interface';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styles: [
  ]
})
export class CrearProductoComponent implements OnInit {

  termino2      : string[]  = ["available", "pending", "sold"];

  mascota      : Mascota = {
    id: 0,
    category: {id: 0, name: ''},
    name: '',
    photoUrls: [],
    tags: [],
    status: Status.Available
  };
  
  hayError      : boolean   = false;

  constructor( private productosService: ProductosService ) { }

  ngOnInit(): void {
  }

  guardar() {

      this.productosService.postProductos( this.mascota )
        .subscribe( async () => {
          window.location.replace('./productos'); });
    }

}
