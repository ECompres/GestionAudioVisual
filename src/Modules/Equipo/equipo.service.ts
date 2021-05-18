import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquipoDTO } from './dto/equipo.dto';
import { Equipo } from './Entities/equipo.entity';

@Injectable()
export class EquipoService {

    constructor(
        @InjectRepository(Equipo)
        private readonly equipoRepository: Repository<Equipo>
    ) { }

    async obtenerEquipos(): Promise<Equipo[]> {
        return await this.equipoRepository.find();
    }

    async obtenerEquipo(id: number): Promise<Equipo> {
        return await this.equipoRepository.findOne(id);
    }

    async crearEquipo(Equipo: EquipoDTO): Promise<Equipo> {
        return await this.equipoRepository.save(Equipo);
    }

    async actualizarEquipo(id: number, Equipo: EquipoDTO): Promise<Equipo> {
        const equipoViejo = await this.obtenerEquipo(id);
        const equipoNuevo = Object.assign(equipoViejo, Equipo);
        return await this.equipoRepository.save(equipoNuevo);
    }

    async eliminarEquipo(id: number): Promise<any> {
        return await this.equipoRepository.delete(id);
    }
}
