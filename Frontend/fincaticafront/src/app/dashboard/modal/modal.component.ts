import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NumerosService } from 'src/app/numeros/services/numeros.service';
import { DashboardService } from '../services/dashboard.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    private numerosService: NumerosService
  ) {}

  formularioAgregarAnimal: FormGroup = this.fb.group({
    numero: ['', Validators.required],
    color: [''],
    genero: [''],
    fecha_entrada: [''],
    peso_entrada: [0],
    precio_entrada: [0],
  });

  // Llenar selectores
  numeros: any;

  ngOnInit(): void {
    this.numeros = this.numerosService.consultarNumeros().subscribe((data) => {
      this.numeros = data;
    });
  }

  guardar() {}

  closeModal() {
    this.modalService.$modal.emit(false);
  }
}
