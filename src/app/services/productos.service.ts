import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../pages/interfaces/mascotas.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getProductos( termino: string ): Observable<Mascota[]> {
    const url = `${ this.apiUrl }findByStatus?status=${ termino }`;
    return this.http.get<Mascota[]>( url );
  }

  getMascotaPorId( numero: number ): Observable<Mascota> {
    const url = `${ this.apiUrl }${ numero }`;
    return this.http.get<Mascota>( url );
  }

  deleteProductos( numero: number ): Observable<Mascota> {
    const url = `${ this.apiUrl }${ numero }`;
    return this.http.delete<Mascota>( url );
  }

  putProductos( mascota: Mascota ): Observable<Mascota> {
    const url = `${ this.apiUrl }`;
    return this.http.put<Mascota>( url, mascota );
  }

  postProductos( mascota: Mascota ): Observable<Mascota> {
    return this.http.post<Mascota>( this.apiUrl, mascota );
  }
}
