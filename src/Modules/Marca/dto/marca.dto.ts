import { Equipo } from "src/Modules/Equipo/Entities/equipo.entity";
import { Modelo } from "src/Modules/Modelo/Entities/modelo.entity";

export class MarcaDto{
    ID?: number;
    NOMBRE: string;
    MODELOS?: Modelo[];
    EQUIPO?:Equipo[];
    ESTADO: boolean;
}