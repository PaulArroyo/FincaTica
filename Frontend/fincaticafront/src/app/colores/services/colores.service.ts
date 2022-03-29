import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ColoresService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.herokuUrl;

  consultarColores() {
    const url = `${this.baseUrl}/colores`;

    return this.http.get(url);
  }
}
