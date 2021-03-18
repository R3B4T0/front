import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = undefined
  formLogin = this.fb.group({
    email:['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private servicioUsuario:UserService, private fb:FormBuilder, private irHacia:Router) { }

  ngOnInit(): void {
  }

  fnLogged(): boolean {
    return this.servicioUsuario.isLogged()
  }

  login() {
    this.servicioUsuario.acceso(this.formLogin.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta.userToken);
        this.irHacia.navigate(['/perfil'])
      },
      error => {
        console.log(error)
        this.error = error.error.error
      }
    )
  }
}
