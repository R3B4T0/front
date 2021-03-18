import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import "@angular/common/locales/global/es";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { BandasComponent } from './componentes/bandas/bandas.component';
import { VideoComponent } from './componentes/video/video.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { VerPerfilComponent } from './componentes/ver-perfil/ver-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    BandasComponent,
    VideoComponent,
    PerfilComponent,
    LoginComponent,
    RegisterComponent,
    VerPerfilComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:"es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
