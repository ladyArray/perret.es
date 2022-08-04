import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  url: string = "https://www.zaragoza.es/sede/servicio/proteccion-animal";

  cabezeras: HttpHeaders = new HttpHeaders({ "Content-type": "application/json" });

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url , { headers: this.cabezeras });
  }

  buscar(id: string) {
    return this.http.get(this.url +"/" + id , {headers: this.cabezeras});
  }
}
