import { Usuarios } from "src/Modules/Usuarios/Entities/usuarios.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoUsuarios {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    DESCRIPCION: string;

    @Column()
    ESTADO: Boolean;

    @OneToMany(type=>Usuarios, usuario => usuario.ID_TIPO_USUARIO)
    USUARIOS: Usuarios[];
}