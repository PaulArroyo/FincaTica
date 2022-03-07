import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../../services/animales.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  animales: any; //TODO: Corregir tipado

  constructor(private animalesService: AnimalesService) {}

  ngOnInit(): void {
    this.animalesService.consultarAnimales().subscribe((data) => {
      // console.log(data);
      this.animales = data;
      console.log(this.animales);
    });
  }
}
