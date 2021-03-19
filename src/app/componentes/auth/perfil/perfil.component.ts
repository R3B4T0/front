import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  mensaje: string = ''
  perfil: User = {}
  mostrarEditar: boolean = false
  mostrarEliminar: boolean = false
  formPerfil = this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:[''],
    email:['', [Validators.required, Validators.email]],
    datosInteres:[''],
    telefono:[undefined]
  })
  formImagen = this.fb.group({
    imagen: ['', Validators.required]
  })
  formVideo = this.fb.group({
    codigo: ['', Validators.required]
  })
  constructor(private servicioUsuario:UserService, private fb:FormBuilder, private irHacia:Router) { }

  ngOnInit(): void {
    this.getUsuario()
  }

  fnLogged(): boolean {
    return this.servicioUsuario.isLogged()
  }

  getUsuario() {
    this.servicioUsuario.obtenerPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.perfil = respuesta
      },
      error => console.log(error)
    )
  }

  insertarVideo(): void {
    this.servicioUsuario.insertarVideo(this.formVideo.value).subscribe(
      respuesta => {
        console.log(respuesta)
      },
      error => console.log(error)
    )
  }

  cargarPerfil(): void {
    this.servicioUsuario.obtenerPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.perfil = respuesta
        this.formPerfil.patchValue(respuesta)
      },
      error => console.log(error)
    )
  }

  editarPerfil(): void {
    const user: User = {}
    user.nombre = this.formPerfil.get('nombre').value
    user.apellidos = this.formPerfil.get('apellidos').value
    user.datosInteres = this.formPerfil.get('datosInteres').value
    user.email = this.formPerfil.get('email').value
    user.password = this.formPerfil.get('password').value
    user.telefono = this.formPerfil.get('telefono').value
    this.servicioUsuario.editarPerfil(user).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
        this.mostrarEditar = false
      },
      error => {
        console.log(error)
        this.mensaje = error.error.error
      }
    )
  }

  eliminarPerfil(): void {
    this.servicioUsuario.eliminarPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.logOut()
        this.irHacia.navigate(['/login'])
      },
      error => console.log(error)
    )
  }

  cambiaImagen(evento): void{
    if (evento.target.files) {
      this.formImagen.get('imagen').setValue(evento.target.files[0])
    }
  }
}
