import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  estiloActivo: string = "active text-dark sombra"
  constructor(private irHacia:Router, private servicioUsuario:UserService) { }

  ngOnInit(): void {
  }

  fnLogged(): boolean {
    return this.servicioUsuario.isLogged()
  }

  doLogout(): void {
    this.servicioUsuario.logOut()
    this.irHacia.navigate(['/login'])
  }
}
