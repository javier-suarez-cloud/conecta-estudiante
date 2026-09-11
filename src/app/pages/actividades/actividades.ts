import { Component } from '@angular/core';

interface Actividad {
  nombre: string;
  descripcion: string;
  horario: string;
}

@Component({
  selector: 'app-actividades',
  standalone: true,
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
  actividades: Actividad[] = [
    { nombre: 'Taller de Programación Web', descripcion: 'Desarrollo moderno con Angular.', horario: 'Lunes 14:00 - 16:00' },
    { nombre: 'Club de Robótica', descripcion: 'Diseño y desarrollo de prototipos electrónicos.', horario: 'Martes 10:00 - 12:00' },
    { nombre: 'Taller de Liderazgo', descripcion: 'Desarrollo de habilidades blandas y trabajo en equipo.', horario: 'Miércoles 15:00 - 17:00' },
    { nombre: 'Feria de Innovación', descripcion: 'Exposición de proyectos finales de estudiantes.', horario: 'Jueves 11:00 - 13:00' }
  ];
}