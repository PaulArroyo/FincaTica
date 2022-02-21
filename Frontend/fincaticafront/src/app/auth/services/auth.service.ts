import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.baseUrl;

  login(correo: string, password: string) {
    const url = `${this.baseUrl}/auth`;
    const body = { correo, password };

    return this.http.post(url, body);
  }
}
