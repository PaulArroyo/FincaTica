import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    // console.log(this.miFormulario.value);
    const { correo, password } = this.miFormulario.value;

    this.authService.login(correo, password).subscribe((ok) => {
      if (ok) {
        Swal.fire({
          icon: 'success',
          title: 'Acceso correcto',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('/dashboard');
      } else {
        // TODO: Mostrar mensaje de error
        Swal.fire('Usuario y/o contraseña incorrectos', '', 'error');
      }
    });
  }
}
