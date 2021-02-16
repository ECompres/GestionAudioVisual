export class RentaDto {
    ID?: number;
    NUMERO_PRESTAMO: number;
    ID_EMPLEADO: number
    ID_EQUIPO: number
    ID_USUARIO: number
    FECHA_PRESTAMO: Date
    FECHA_DEVOLUCION: Date
    COMENTARIO: string;
    ESTADO: boolean;
}