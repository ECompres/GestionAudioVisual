import { type } from "os";
import { Equipo } from "src/Modules/Equipo/Entities/equipo.entity";
import { Marca } from "src/Modules/Marca/Entities/marca.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Modelo {
    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(type => Marca, marca => marca.ID, { eager: true })
    ID_MARCA: Marca;

    @Column()
    NOMBRE: string;

    @Column()
    ESTADO: boolean;

    @OneToMany(type => Equipo, equipo => equipo.ID_MODELO)
    EQUIPO: Equipo[];
}