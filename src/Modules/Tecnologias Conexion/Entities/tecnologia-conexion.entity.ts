import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TecnologiaConexion {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ length: 500 })
    DESCRIPCION: string;

    @Column()
    ESTADO: boolean;
}