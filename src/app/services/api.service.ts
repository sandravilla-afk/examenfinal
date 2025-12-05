import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // Obtener lista de usuarios (para Home)
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/users`);
  }

  // Obtener lista de posts (para Page1)
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/posts`);
  }
}

