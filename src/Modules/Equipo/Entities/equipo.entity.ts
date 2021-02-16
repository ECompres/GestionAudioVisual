import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Equipo {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    DESCRIPCION: string;

    @Column()
    NUMERO_SERIAL: string;

    @Column()
    ID_MARCA: number;

    @Column()
    ID_MODELO: number;

    @Column()
    ID_TIPO_EQUIPO: number;

    @Column()
    ID_TECNOLOGIA_CONEXION: number;

    @Column()
    ESTADO: boolean;

}