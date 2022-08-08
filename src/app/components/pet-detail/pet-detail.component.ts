import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css'],
})
export class PetDetailComponent implements OnInit {
  pet?: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotasService: MascotasService
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.mascotasService.find(id).subscribe({
      next: (pet: any) => {
        this.pet = pet;
        console.log('in', this.pet);
      },
      error: (error: any) => {
        this.router.navigate(['/dogs'])
      }
    });
  }
}
