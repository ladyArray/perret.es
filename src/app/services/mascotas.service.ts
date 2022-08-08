import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers: HttpHeaders = new HttpHeaders({
  'Content-type': 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class MascotasService {
  url: string = 'https://www.zaragoza.es/sede/servicio/proteccion-animal';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.url, { headers });
  }

  find(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`, { headers });
  }
}
