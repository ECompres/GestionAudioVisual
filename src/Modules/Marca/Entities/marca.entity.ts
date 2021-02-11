import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marca{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    NOMBRE: string;

    @Column()
    ESTADO: boolean;
}