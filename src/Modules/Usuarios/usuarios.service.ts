import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { valida_cedula } from '../global/validar-cedula';
import { UsuarioDto } from './dto/usuarios.dto';
import { Usuarios } from './Entities/usuarios.entity';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuarios)
        private readonly usuariosRepository: Repository<Usuarios>
    ) { }
    async obtenerUsuarios(): Promise<Usuarios[]> {
        return await this.usuariosRepository.find();
    }
    async obtenerUsuario(id: number): Promise<Usuarios> {
        return await this.usuariosRepository.findOne(id);
    }
    async crearUsuario(usuario: UsuarioDto): Promise<any> {
        if (valida_cedula(usuario.CEDULA)) {
            return await this.usuariosRepository.save(usuario);
        } else {
            return "Ingrese una cédula válida";
        }
    }
    async actualizarUsuario(id: number, usuario: UsuarioDto): Promise<any> {
        if (valida_cedula(usuario.CEDULA)) {
            const viejoUsuario = await this.obtenerUsuario(id);
            const nuevoUsuario = Object.assign(viejoUsuario, usuario);
            return await this.usuariosRepository.save(nuevoUsuario);
        }else{
            return "Ingrese una cédula válida";
        }
    }
    async eliminarUsuario(id: number): Promise<any> {
        return await this.usuariosRepository.delete(id);
    }
}
