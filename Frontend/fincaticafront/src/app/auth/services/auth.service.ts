import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.baseUrl;

  login(correo: string, password: string) {
    const url = `${this.baseUrl}/auth`;
    const body = { correo, password };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap((res) => {
        if (res.ok) {
          console.log('Login correcto'); //TODO: Cargar variable con info del usuario
        }
      }),
      map((res) => res.ok),
      catchError((err) => of(false))
    );
  }
}
