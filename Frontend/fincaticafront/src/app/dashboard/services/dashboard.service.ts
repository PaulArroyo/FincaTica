import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.herokuUrl;
  private _numeros: string[] = [];

  consultarUsuarios() {
    const url = `${this.baseUrl}/usuarios`;
    return this.http.get(url);
  }

  consultarNumeros() {
    const url = `${this.baseUrl}/numeros`;
    return this.http.get(url);
    console.log(this._numeros);
  }
}
