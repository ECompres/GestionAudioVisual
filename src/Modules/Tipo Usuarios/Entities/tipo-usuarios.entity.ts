import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoUsuarios {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    DESCRIPCION: string;

    @Column()
    ESTADO: Boolean;
}