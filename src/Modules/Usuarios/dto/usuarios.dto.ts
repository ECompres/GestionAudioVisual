import { TipoUsuarios } from "src/Modules/Tipo Usuarios/Entities/tipo-usuarios.entity";

export class UsuarioDto {
    ID?: number;
    NOMBRE: string;
    APELLIDO: string;
    CEDULA:string;
    MATRICULA: string;
    ID_TIPO_USUARIO: TipoUsuarios;
    ESTADO:boolean;
}