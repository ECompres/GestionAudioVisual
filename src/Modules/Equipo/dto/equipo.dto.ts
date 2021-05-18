import { Marca } from "src/Modules/Marca/Entities/marca.entity";
import { Modelo } from "src/Modules/Modelo/Entities/modelo.entity";
import { TecnologiaConexion } from "src/Modules/Tecnologias Conexion/Entities/tecnologia-conexion.entity";
import { TipoEquipo } from "src/Modules/Tipo Equipo/Entities/tipo-equipo.entity";

export class EquipoDTO {
    ID?: number;
    DESCRIPCION: string;
    NUMERO_SERIAL: string;
    ID_MARCA: Marca;
    ID_MODELO: Modelo;
    ID_TIPO_EQUIPO: TipoEquipo;
    ID_TECNOLOGIA_CONEXION: TecnologiaConexion;
    ESTADO: boolean;
}