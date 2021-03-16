import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servicios:UserService) { }

  usuarios: any[] = []

  ngOnInit(): void {
  }

  obtenerUsuarios(): void {
    this.servicios.obtenerUsuarios().subscribe(
      respuesta => this.usuarios = respuesta,
      error => console.log(error)
    );
  }
}
