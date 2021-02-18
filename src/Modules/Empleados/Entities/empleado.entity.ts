import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Empleado {

    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    NOMBRE: string;

    @Column()
    APELLIDO: string;

    @Column({ unique: true })
    CEDULA: string;

    @Column()
    TANDA: string;

    @Column()
    FECHA_INGRESO: Date;

    @Column({type:'boolean'})
    ESTADO: boolean;

}