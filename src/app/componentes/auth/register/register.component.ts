import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister = this.fb.group({
    nombre:['', [Validators.required]],
    apellidos:[''],
    password:['', [Validators.required, Validators.minLength(4)]],
    password2:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined],
    role:['', [Validators.required]],
    foto:['', [Validators.required]]
  })
  tiempo: number = 7
  creado: Boolean = false
  mensaje: string = ''
  perfil: User = {}
  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  submit(): void{
    if (this.formRegister.value.password = this.formRegister.value.password2) {
      this.servicioUsuario.registrar(this.formRegister.value).subscribe(
        respuesta => {
          console.log(respuesta)
          this.creado = true
          this.irHacia.navigate(['/login'])
          this.contador()
          setTimeout(() => this.creado = false, 6000)
        },
        error => {
          console.log(error)
          this.mensaje = error.error.error
        }
      )
    } else {
      alert('Las contraseñas no coinciden')
    }
  }

  hacerLogin(): void {
    this.servicioUsuario.acceso(this.formRegister.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta.token);
        this.irHacia.navigate(['/perfil'])
      },
      error => {
        console.log(error)
        this.mensaje = error.error.error
      }
    )
  }

  contador(): void{
    if(this.tiempo == 1){
      this.irHacia.navigate(['/perfil'])
    } else {
      this.tiempo = this.tiempo - 1
      setTimeout(() => this.contador(), 1000)
    }
  }

}
