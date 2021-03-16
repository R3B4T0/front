import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})
export class BandasComponent implements OnInit {

  constructor(private servicios:UserService, private irHacia:Router) { }

  usuarios: any[] = []

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(): void {
    this.servicios.obtenerUsuarios().subscribe(
      respuesta => this.usuarios = respuesta,
      error => console.log(error)
    );
  }

  verPerfil(id): void {
    this.irHacia.navigate(['verPerfil/' + id])
  }
}
