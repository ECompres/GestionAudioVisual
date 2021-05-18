import { Renta } from "src/Modules/Rentas/Entities/renta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

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

    @Column({ unique : true})
    EMAIL: string;

    @Column()
    PASSWORD: string;

    @Column()
    TANDA: string;

    @Column()
    FECHA_INGRESO: Date;

    @OneToMany(type => Renta, renta => renta.ID_EMPLEADO)
    RENTAS: Renta[];

    @Column({ type: 'boolean' })
    ESTADO: boolean;

}