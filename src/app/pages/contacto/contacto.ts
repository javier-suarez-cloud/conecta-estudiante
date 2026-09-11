import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  correo: string = 'contacto@conectaestudiante.cl';
  telefono: string = '+56 42 222 3344';
  horario: string = 'Lunes a viernes de 09:00 a 18:00';

}
