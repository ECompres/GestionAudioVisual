import { TipoUsuarios } from "src/Modules/Tipo Usuarios/Entities/tipo-usuarios.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    NOMBRE: string;

    @Column()
    APELLIDO: string;

    @Column()
    CEDULA: string;

    @Column({ unique: true })
    MATRICULA: string;

    @OneToOne(type => TipoUsuarios)
    @JoinColumn({name:"ID_TIPO_USUARIO"})
    ID_TIPO_USUARIO: TipoUsuarios;

    @Column()
    ESTADO: boolean;
}