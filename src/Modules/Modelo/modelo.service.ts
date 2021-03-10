import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModeloDto } from './dto/modelo.dto';
import { Modelo } from './Entities/modelo.entity';

@Injectable()
export class ModeloService {
    constructor(
        @InjectRepository(Modelo)
        private modeloRepository: Repository<Modelo>
    ) { }

    async obtenerModelos(): Promise<Modelo[]>{
        return await this.modeloRepository.find();
    }

    async obtenerModelo(id: number): Promise<Modelo> {
        return await this.modeloRepository.findOne(id);
    }

    async crearModelo(modelo: ModeloDto): Promise<Modelo> {
        return await this.modeloRepository.save(modelo);
    }
    
    async obtenerModelosMarca(idMarca: number) : Promise<Modelo[]> {
        return await this.modeloRepository.find({
            where:{
                ID_MARCA:idMarca
            }
        })
    }

    async actualizarModelo(id: number, modelo: ModeloDto): Promise<Modelo> {
        const viejoModelo = await this.obtenerModelo(id);
        const nuevoModelo = Object.assign(viejoModelo, modelo);
        return await this.modeloRepository.save(nuevoModelo);
    }

    async eliminarModelo(id: number): Promise<any> {
        return await this.modeloRepository.delete(id);
    }

}
