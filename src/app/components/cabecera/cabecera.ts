import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {

  titulo: string = 'Conecta Estudiante';

  subtitulo: string =
    'Actividades y talleres disponibles para los estudiantes del semestre';

}
