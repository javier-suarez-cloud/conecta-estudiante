import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Actividades } from './pages/actividades/actividades';
import { Contacto } from './pages/contacto/contacto';
import { Inscripcion } from './pages/inscripcion/inscripcion';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'actividades', component: Actividades },
  { path: 'contacto', component: Contacto },
  { path: 'inscripcion', component: Inscripcion },
  { path: '**', redirectTo: 'inicio' },
];
