import { Equipo } from "src/Modules/Equipo/Entities/equipo.entity";
import { Modelo } from "src/Modules/Modelo/Entities/modelo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marca{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    NOMBRE: string;

    @Column()
    ESTADO: boolean;

    @OneToMany(type=>Modelo, modelo => modelo.ID_MARCA,{
        eager:true
    })
    MODELOS: Modelo[];

    @OneToMany(type=>Equipo, equipo => equipo.ID_MARCA)
    EQUIPO: Equipo[];
}