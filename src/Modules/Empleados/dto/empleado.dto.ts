import { Renta } from "src/Modules/Rentas/Entities/renta.entity";

export class EmpleadoDto {
    ID?: number
    NOMBRE: string;
    CEDULA: string;
    EMAIL: string;
    PASSWORD: string;
    TANDA: string;
    FECHA_INGRESO: Date;
    ESTADO: boolean;
    RENTAS?: Renta[];
}