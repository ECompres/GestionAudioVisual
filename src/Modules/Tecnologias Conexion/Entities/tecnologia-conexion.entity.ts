import { Equipo } from "src/Modules/Equipo/Entities/equipo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TecnologiaConexion {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ length: 500 })
    DESCRIPCION: string;

    @Column()
    ESTADO: boolean;

    @OneToMany(type=>Equipo, equipo => equipo.ID_TECNOLOGIA_CONEXION)
    EQUIPO: Equipo[];
}