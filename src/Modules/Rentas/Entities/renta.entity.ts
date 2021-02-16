import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Renta {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    NUMERO_PRESTAMO: number;

    @Column()
    ID_EMPLEADO: number

    @Column()
    ID_EQUIPO: number

    @Column()
    ID_USUARIO: number

    @Column()
    FECHA_PRESTAMO: Date

    @Column()
    FECHA_DEVOLUCION: Date

    @Column()
    COMENTARIO: string;

    @Column()
    ESTADO: boolean;
}