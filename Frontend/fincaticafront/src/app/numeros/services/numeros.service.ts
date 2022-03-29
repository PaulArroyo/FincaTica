import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NumerosService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.herokuUrl;

  consultarNumeros() {
    const url = `${this.baseUrl}/numeros`;
    return this.http.get(url);
  }
}
