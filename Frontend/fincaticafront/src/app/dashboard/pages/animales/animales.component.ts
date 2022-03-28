import { Component, OnInit } from '@angular/core';
import { AnimalesService } from 'src/app/animales/services/animales.service';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css'],
})
export class AnimalesComponent implements OnInit {
  animales: any; //TODO: Corregir tipado

  modalSwitch: boolean = false;

  constructor(
    private animalesService: AnimalesService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalService.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    });

    this.animalesService.consultarAnimales().subscribe((data) => {
      // console.log(data);
      this.animales = data;
      console.log(this.animales);
    });
  }

  openModal() {
    this.modalSwitch = true;
  }
}
