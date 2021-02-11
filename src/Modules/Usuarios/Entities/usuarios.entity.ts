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
    MATRICULA: string;

    @Column()
    ID_TIPO_USUARIO: number;
}