import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servicioUsuario:UserService) { }

  ngOnInit(): void {
  }

  fnLogged(): boolean {
    return this.servicioUsuario.isLogged()
  }
}
