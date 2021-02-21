import { Empleado } from "src/Modules/Empleados/Entities/empleado.entity";
import { Equipo } from "src/Modules/Equipo/Entities/equipo.entity";
import { Usuarios } from "src/Modules/Usuarios/Entities/usuarios.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Renta {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({unique:true})
    NUMERO_PRESTAMO: number;

    @ManyToOne(type => Empleado, empleado => empleado.ID)
    ID_EMPLEADO: Empleado;

    @OneToOne(type => Equipo, equipo => equipo.ID, { eager: true })
    @JoinColumn({name:"ID_EQUIPO"})
    ID_EQUIPO: Equipo;

    @ManyToOne(type => Usuarios, usuario => usuario.ID)
    ID_USUARIO: Usuarios;

    @Column()
    FECHA_PRESTAMO: Date

    @Column()
    FECHA_DEVOLUCION: Date

    @Column()
    COMENTARIO: string;

    @Column()
    ESTADO: boolean;
}