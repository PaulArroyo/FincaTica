import { Component, OnInit } from '@angular/core';
import { ColoresService } from '../services/colores.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  colores: any;

  constructor(private coloresService: ColoresService) {}

  ngOnInit(): void {
    this.coloresService.consultarColores().subscribe((data) => {
      this.colores = data;
      console.log(this.colores);
    });
  }
}
