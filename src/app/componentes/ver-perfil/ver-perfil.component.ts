import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/clases/user';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {

  constructor(private usuario:UserService, private ruta:ActivatedRoute) { }

  id: string
  user: User

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get("id")
    this.obtenerPerfil()
  }

  obtenerPerfil(): void {
    this.usuario.verPerfil(this.id).subscribe(
      respuesta => {console.log(respuesta), this.user = respuesta},
      error => console.log(error)
    )
  }

  fnLogged(): boolean {
    return this.usuario.isLogged()
  }
}
