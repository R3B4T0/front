import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servicios:UserService, private irHacia:Router) { }

  musicos: any[] = []

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(): void {
    this.servicios.obtenerUsuarios().subscribe(
      respuesta => this.musicos = respuesta,
      error => console.log(error)
    );
  }

  verPerfil(id): void {
    this.irHacia.navigate(['verPerfil/' + id])
  }
}
