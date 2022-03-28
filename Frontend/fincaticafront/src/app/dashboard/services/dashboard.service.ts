import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.baseUrl;

  consultarUsuarios() {
    const url = `${this.baseUrl}/usuarios`;
    return this.http.get(url);
  }
}
