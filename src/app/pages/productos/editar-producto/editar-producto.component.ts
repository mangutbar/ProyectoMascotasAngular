import { Component, OnInit } from '@angular/core';
import { Mascota, Status } from '../../interfaces/mascotas.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styles: [
  ]
})
export class EditarProductoComponent implements OnInit {

  termino2: Status[] = [Status.Available, Status.Pending, Status.Sold];
  mascota      : Mascota = {
    id: 0,
    name: '',
    category: {id: 0, name: ''},
    photoUrls: [],
    tags: [],
    status: Status.Available
  };
  hayError      : boolean   = false;

  constructor( private activatedRoute: ActivatedRoute,
                private productosService: ProductosService) { }

  ngOnInit(): void {

    // Para obtener el ID
    this.activatedRoute.paramMap
      .subscribe( (mascota) => {
        this.mascota.id = Number(mascota.get('id'));
        console.log(this.mascota.id);
        
      });
      this.getMascota(this.mascota.id);
      

      
  }

  getMascota(id: number){
    this.productosService.getMascotaPorId(id)
      .subscribe( (mascota) => {
        this.mascota.name = mascota.name;
        this.mascota.photoUrls = mascota.photoUrls;
        this.mascota.status = mascota.status;
      });
      
  }

  cancelar() {
    console.log(this.mascota);
  }

  guardar() {
    this.productosService.putProductos( this.mascota )
      .subscribe( async () => {
        window.location.replace('./productos'); });
  }

}
