import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  imports: [ReactiveFormsModule],
  templateUrl: './inscripcion.html',
  styleUrl: './inscripcion.css'
})
export class Inscripcion {

  formularioInscripcion = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    correo: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    carrera: new FormControl('', [
      Validators.required
    ]),
    actividad: new FormControl('', [
      Validators.required
    ]),
    jornada: new FormControl('', [
      Validators.required
    ]),
    comentario: new FormControl('')
  });

  enviarInscripcion() {
    if (this.formularioInscripcion.valid) {
      console.log('Inscripcion enviada:', this.formularioInscripcion.value);
      alert('Inscripcion registrada correctamente');
      this.formularioInscripcion.reset({
        nombre: '',
        apellido: '',
        correo: '',
        carrera: '',
        actividad: '',
        jornada: '',
        comentario: ''
      });
    } else {
      alert('Debe completar correctamente los campos obligatorios');
      this.formularioInscripcion.markAllAsTouched();
    }
  }

}
