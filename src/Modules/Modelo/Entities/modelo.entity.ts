import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Modelo {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    ID_MARCA: number;

    @Column()
    NOMBRE: string;

    @Column()
    ESTADO: boolean;
}