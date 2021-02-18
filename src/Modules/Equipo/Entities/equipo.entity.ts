import { Marca } from "src/Modules/Marca/Entities/marca.entity";
import { Modelo } from "src/Modules/Modelo/Entities/modelo.entity";
import { TecnologiaConexion } from "src/Modules/Tecnologias Conexion/Entities/tecnologia-conexion.entity";
import { TipoEquipo } from "src/Modules/Tipo Equipo/Entities/tipo-equipo.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Equipo {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    DESCRIPCION: string;

    @Column({ unique: true })
    NUMERO_SERIAL: string;

    @ManyToOne(type=>Marca, marca => marca.ID)
    @JoinColumn({ name: "ID_MARCA" })
    ID_MARCA: Marca;

    @ManyToOne(type => Modelo, modelo => modelo.ID, { eager: true })
    @JoinColumn({ name: "ID_MODELO" })
    ID_MODELO: Modelo;

    @ManyToOne(type => TipoEquipo, tipoEquipo => tipoEquipo.ID, { eager: true })
    @JoinColumn({ name: "ID_TIPO_EQUIPO" })
    ID_TIPO_EQUIPO: TipoEquipo;

    @ManyToOne(type => TecnologiaConexion, tecnologiaConexion => tecnologiaConexion.ID, { eager: true })
    @JoinColumn({ name: "ID_TECNOLOGIA_CONEXION" })
    ID_TECNOLOGIA_CONEXION: TecnologiaConexion;
    
    @Column()
    ESTADO: boolean;

}