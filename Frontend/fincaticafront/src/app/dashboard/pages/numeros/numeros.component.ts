import { Component, OnInit } from '@angular/core';
import { NumerosService } from 'src/app/numeros/services/numeros.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})
export class NumerosComponent implements OnInit {
  numeros: any;
  constructor(private numerosService: NumerosService) {}

  ngOnInit(): void {
    this.numerosService.consultarNumeros().subscribe((data) => {
      this.numeros = data;
      console.log(this.numeros);
    });
  }
}
