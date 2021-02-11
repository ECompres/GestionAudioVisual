import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Equipo {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    ID_MARCA: number;

    @Column()
    NOMBRE: string;

    @Column()
    ID_TIPO_EQUIPO: number;

    @Column()
    ESTADO: boolean;

}