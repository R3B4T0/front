import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accesoUsuario, User } from '../clases/user';
const url = 'http://localhost:8000/api/'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  obtenerUsuarios(): Observable<any> {
    return this.http.get(url + "usuarios")
  }

  verPerfil(id): Observable<any> {
    return this.http.get(url + "usuario/" + id)
  }

  obtenerBandas(): Observable<any> {
    return this.http.get(url + "bandas")
  }

  registrar(usuario: User): Observable<any> {
    return this.http.post(url + "usuario", usuario)
  }

  acceso(usuario: accesoUsuario): Observable<any> {
    return this.http.post(url + 'login', usuario)
  }

  obtenerPerfil(): Observable<any> {
    return this.http.get(url + 'perfil')
  }

  editarPerfil(usuario: User): Observable<any> {
    return this.http.put(url, usuario)
  }

  eliminarPerfil(): Observable<any> {
    return this.http.delete(url)
  }

  subirImagen(entrada): Observable<any> {
    return this.http.post(url + 'image/', entrada)
  }

  guardarToken(token: string): void {
    localStorage.setItem('userToken', token)
  }

  isLogged(): boolean {
    return !!localStorage.getItem('userToken')
  }

  logOut(): void {
    localStorage.removeItem('userToken')
  }

  leerToken(): string {
    return localStorage.getItem('userToken')
  }
}
