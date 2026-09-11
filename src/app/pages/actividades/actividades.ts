import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades',
  imports: [],
  templateUrl: './actividades.html',
  styleUrl: './actividades.css'
})
export class Actividades {

  actividades = [
    {
      nombre: 'Taller de Programación Web',
      descripcion: 'Desarrollo de aplicaciones con Angular.',
      horario: 'Lunes 14:00 - 16:00'
    },
    {
      nombre: 'Club de Robótica',
      descripcion: 'Construcción de prototipos con Arduino.',
      horario: 'Martes 10:00 - 12:00'
    },
    {
      nombre: 'Taller de Liderazgo',
      descripcion: 'Habilidades blandas y trabajo en equipo.',
      horario: 'Miércoles 15:00 - 17:00'
    },
    {
      nombre: 'Feria de Innovación',
      descripcion: 'Exposición de proyectos de estudiantes.',
      horario: 'Jueves 11:00 - 13:00'
    }
  ];

}
