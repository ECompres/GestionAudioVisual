import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoUsuariosDto } from './dto/tipo-usuarios.dto';
import { TipoUsuarios } from './Entities/tipo-usuarios.entity';

@Injectable()
export class TipoUsuarioService {
    constructor(
        @InjectRepository(TipoUsuarios)
        private readonly tipoUsuarioRepository: Repository<TipoUsuarios>
    ) { }

    async obtenerTipoUsuarios(): Promise<TipoUsuarios[]> {
        return await this.tipoUsuarioRepository.find();
    }

    async obtenerTipoUsuario(id: number): Promise<TipoUsuarios> {
        return await this.tipoUsuarioRepository.findOne(id);
    }

    async crearTipoUsuario(tipoUsuario: TipoUsuariosDto): Promise<TipoUsuarios> {
        return await this.tipoUsuarioRepository.save(tipoUsuario);
    }

    async actualizarTipoUsuario(id: number, tipoUsuario: TipoUsuariosDto): Promise<TipoUsuarios> {
        const viejoTipoUsuario = await this.obtenerTipoUsuario(id);
        const nuevoTipoUsuario = Object.assign(viejoTipoUsuario, tipoUsuario);
        return await this.tipoUsuarioRepository.save(nuevoTipoUsuario);
    }

    async eliminarTipoUsuario(id: number): Promise<any> { 
        return await this.tipoUsuarioRepository.delete(id);
    }
}
