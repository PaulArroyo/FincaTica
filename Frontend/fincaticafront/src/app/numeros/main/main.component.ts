import { Component, OnInit } from '@angular/core';
import { NumerosService } from '../services/numeros.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  numeros: any;
  constructor(private numerosService: NumerosService) {}

  ngOnInit(): void {
    this.numerosService.consultarNumeros().subscribe((data) => {
      this.numeros = data;
      console.log(this.numeros);
    });
  }
}
