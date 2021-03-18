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

  bandas: any[] = []

  ngOnInit(): void {
    this.obtenerBandas()
  }

  obtenerBandas(): void {
    this.servicios.obtenerBandas().subscribe(
      respuesta => this.bandas = respuesta,
      error => console.log(error)
    );
  }

  verPerfil(id): void {
    this.irHacia.navigate(['verPerfil/' + id])
  }
}
