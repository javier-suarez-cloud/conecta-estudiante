import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent {
  private fb = inject(FormBuilder);
  
  mensajeExito: string = '';

  formInscripcion: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.email]],
    carrera: ['', Validators.required],
    actividad: ['', Validators.required],
    jornada: ['', Validators.required],
    comentario: ['']
  });

  onSubmit(): void {
    if (this.formInscripcion.valid) {
      console.log('Datos enviados:', this.formInscripcion.value);
      this.mensajeExito = '¡Solicitud de inscripción registrada con éxito!';
      this.formInscripcion.reset();
    } else {
      this.formInscripcion.markAllAsTouched();
    }
  }
}