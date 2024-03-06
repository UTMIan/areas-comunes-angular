import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ModuloReservasComponent } from './modulo-reservas/modulo-reservas.component';
import { GestionReservasComponent } from './gestion-reservas/gestion-reservas.component';
import { GenerarReporteComponent } from './generar-reporte/generar-reporte.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'modulo-reservas', component: ModuloReservasComponent },
  { path: 'gestion-reservas', component: GestionReservasComponent },
  { path: 'generar-reporte', component: GenerarReporteComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
