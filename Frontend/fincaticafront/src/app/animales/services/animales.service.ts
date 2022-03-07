import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimalesService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.baseUrl;

  consultarAnimales() {
    const url = `${this.baseUrl}/animales`;

    return this.http.get(url);
  }
}
