import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandasComponent } from './componentes/bandas/bandas.component';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { VerPerfilComponent } from './componentes/ver-perfil/ver-perfil.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "bandas", component:BandasComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "verPerfil/:id", component:VerPerfilComponent},
  {path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
