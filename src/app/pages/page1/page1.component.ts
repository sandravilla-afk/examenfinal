import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  posts: any[] = [];
  loading = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPosts().subscribe({
      next: data => {
        this.posts = data;
        this.loading = false;
      },
      error: err => {
        console.error('Error al cargar posts', err);
        this.loading = false;
      }
    });
  }
}


