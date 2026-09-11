import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: '**', redirectTo: 'inicio' }
];