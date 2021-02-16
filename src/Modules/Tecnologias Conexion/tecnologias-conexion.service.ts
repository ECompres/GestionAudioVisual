import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TecnologiaConexionDto } from './dto/tecnologia-conexion.dto';
import { TecnologiaConexion } from './Entities/tecnologia-conexion.entity';


@Injectable()
export class    TecnologiasConexionService {

    constructor(@InjectRepository(TecnologiaConexion)
    private readonly tecnologiaConexionRepository: Repository<TecnologiaConexion>
    ) { }

    async obtenerTecnologiasConexion(): Promise<TecnologiaConexion[]> {
        return await this.tecnologiaConexionRepository.find();
    }

    async obtenerTecnologiaConexion(id: number): Promise<TecnologiaConexion> {
        return await this.tecnologiaConexionRepository.findOne(id);
    }

    async crearTecnologiaConexion(tecnologiaConexion: TecnologiaConexionDto): Promise<TecnologiaConexion> {
        return await this.tecnologiaConexionRepository.save(tecnologiaConexion);
    }

    async actualizarTecnologiaConexion(id: number, tecnologiaConexion: TecnologiaConexionDto): Promise<TecnologiaConexion> {
        const viejaTecnologiaConexion = await this.obtenerTecnologiaConexion(id);
        const nuevaTecnologiaConexion = Object.assign(viejaTecnologiaConexion, tecnologiaConexion);
        return await this.tecnologiaConexionRepository.save(nuevaTecnologiaConexion);
    }

    async eliminarTecnologiaConexion(id: number): Promise<any> {
        return await this.tecnologiaConexionRepository.delete(id);
    }

}