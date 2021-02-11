import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoEquipoDto } from './dto/tipo-equipo.dto';
import { TipoEquipo } from './Entities/tipo-equipo.entity';

@Injectable()
export class TipoEquipoService {

    constructor(@InjectRepository(TipoEquipo)
    private readonly tipoEquipoRepository: Repository<TipoEquipo>
    ) { }

    async obtenerTipoEquipos(): Promise<TipoEquipo[]> {
        return await this.tipoEquipoRepository.find();
    }

    async obtenerTipoEquipo(id: number): Promise<TipoEquipo> {
        return await this.tipoEquipoRepository.findOne(id);
    }
    async crearTipoEquipo(tipoEquipo: TipoEquipoDto): Promise<TipoEquipo> {
        return await this.tipoEquipoRepository.save(tipoEquipo)
    }
    async actualizarTipoEquipo(id: number, tipoEquipo: TipoEquipoDto): Promise<TipoEquipo> {
        const viejoTipoEquipo = await this.obtenerTipoEquipo(id);
        const nuevoTipoEquipo = Object.assign(viejoTipoEquipo, tipoEquipo);
        return await this.tipoEquipoRepository.save(nuevoTipoEquipo);
    }
    async eliminarTipoEquipo(id: number): Promise<any> {
        return await this.tipoEquipoRepository.delete(id);
    }
}
