import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoEquipo {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    DESCRIPCION: string;

    @Column()
    ESTADO: Boolean;
}