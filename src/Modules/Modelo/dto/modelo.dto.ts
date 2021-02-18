import { Equipo } from "src/Modules/Equipo/Entities/equipo.entity";
import { Marca } from "src/Modules/Marca/Entities/marca.entity";

export class ModeloDto {
    ID?: number;
    ID_MARCA: Marca;
    NOMBRE: string;
    EQUIPO?:Equipo[];
    ESTADO: boolean;
}