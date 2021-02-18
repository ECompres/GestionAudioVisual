import { Equipo } from "src/Modules/Equipo/Entities/equipo.entity";

export class TipoEquipoDto {
    ID?: number;
    DESCRIPCION: string;
    ESTADO: Boolean;
    EQUIPO?: Equipo[];
}