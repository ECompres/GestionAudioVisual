import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    NOMBRE: string;

    @Column()
    APELLIDO: Boolean;

    @Column()
    CEDULA: string;

    @Column()
    MATRICULA: string;

    @Column()
    TIPO_PERSONA: string;

    @Column()
    ID_TIPO_USUARIO: number;

    @Column()
    ESTADO: boolean;
}