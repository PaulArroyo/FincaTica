import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: any; //TODO: Corregir tipado
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.consultarUsuarios().subscribe((data) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }
}
