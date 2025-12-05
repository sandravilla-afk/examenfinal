import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[] = [];
  loading = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next: data => { this.users = data; this.loading = false; },
      error: err => { console.error(err); this.loading = false; }
    });
  }
}




