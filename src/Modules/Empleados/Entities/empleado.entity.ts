import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Empleado {

    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    NOMBRE: string;

    @Column()
    CEDULA: string;

    @Column()
    TANDA: string;

    @Column()
    FECHA_INGRESO: Date;

    @Column()
    ESTADO: Date;

}