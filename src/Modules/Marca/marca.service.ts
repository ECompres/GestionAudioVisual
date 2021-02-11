import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarcaDto } from './dto/marca.dto';
import { Marca } from './Entities/marca.entity';

@Injectable()
export class MarcaService {

    constructor(
        @InjectRepository(Marca)
        private readonly marcaRepository: Repository<Marca>
    ) { }

    async obtenerMarcas() {
        return await this.marcaRepository.find();
    }

    async obtenerMarca(id: number): Promise<Marca> {
        return await this.marcaRepository.findOne(id);
    }

    async crearMarca(marca: MarcaDto): Promise<Marca> {
        return await this.marcaRepository.save(marca);
    }

    async actualizarMarca(id: number, marca: MarcaDto): Promise<Marca> {
        const viejaMarca = await this.obtenerMarca(id);
        const nuevaMarca = Object.assign(viejaMarca, marca);
        return await this.marcaRepository.save(nuevaMarca);
    }

    async eliminarMarca(id: number): Promise<any> {
        return await this.marcaRepository.delete(id);
    }

}
