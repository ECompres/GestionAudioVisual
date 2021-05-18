import { Equipo } from "src/Modules/Equipo/Entities/equipo.entity";

export class TecnologiaConexionDto {
    ID?: number;
    DESCRIPCION: string;
    ESTADO: boolean;
    EQUIPO?:Equipo[];
}