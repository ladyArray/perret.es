import { Component, OnInit } from '@angular/core';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {
  mascotas: any[] = [];
  searchTerm: string = '';
  searchFields: string[] = ['title', 'especie', 'raza'];

  constructor(private mascotasService: MascotasService) {}

  ngOnInit(): void {
    this.mascotasService.getAll().subscribe((datos) => {
      this.mascotas = datos.result;
      console.log(datos);
    });
  }

  reset() {
    this.searchTerm = '';
  }
}
