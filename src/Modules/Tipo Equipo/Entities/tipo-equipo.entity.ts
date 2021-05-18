import { Equipo } from "src/Modules/Equipo/Entities/equipo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoEquipo {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    DESCRIPCION: string;

    @Column()
    ESTADO: Boolean;

    @OneToMany(type=>Equipo, equipo => equipo.ID_TIPO_EQUIPO)
    EQUIPO: Equipo[];
}