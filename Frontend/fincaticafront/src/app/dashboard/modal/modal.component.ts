import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  // formularioAgregarAnimal: FormGroup = new FormGroup({
  //   numero: new FormControl(20),
  // });

  constructor(private modalService: ModalService, private fb: FormBuilder) {}

  formularioAgregarAnimal: FormGroup = this.fb.group({
    numero: [''],
    color: [''],
    genero: [''],
    fecha_entrada: [''],
    peso_entrada: [0],
    precio_entrada: [0],
  });

  ngOnInit(): void {}

  closeModal() {
    this.modalService.$modal.emit(false);
  }
}
