export interface User {
    id?: number
    nombre?: string
    apellidos?: string
    email?: string
    password?: string
    telefono?: string
    foto?: string
    datosInteres?: Text
}


export interface accesoUsuario {
    email: string
    password: string
}