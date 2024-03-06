import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ModuloReservasComponent } from './modulo-reservas/modulo-reservas.component';
import { GestionReservasComponent } from './gestion-reservas/gestion-reservas.component';
import { GenerarReporteComponent } from './generar-reporte/generar-reporte.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ModuloReservasComponent,
    GestionReservasComponent,
    GenerarReporteComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
