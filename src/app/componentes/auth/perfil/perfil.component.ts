import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private servicioUsuario:UserService) { }

  ngOnInit(): void {
  }

  fnLogged(): boolean {
    return this.servicioUsuario.isLogged()
  }

}
