import { Empleado } from "src/Modules/Empleados/Entities/empleado.entity";
import { Equipo } from "src/Modules/Equipo/Entities/equipo.entity";
import { Usuarios } from "src/Modules/Usuarios/Entities/usuarios.entity";

export class RentaDto {
    ID?: number;
    NUMERO_PRESTAMO: number;
    ID_EMPLEADO: Empleado;
    ID_EQUIPO: Equipo;
    ID_USUARIO: Usuarios;
    FECHA_PRESTAMO: Date
    FECHA_DEVOLUCION: Date
    COMENTARIO: string;
    ESTADO: boolean;
}