import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentaDto } from './dto/renta.dto';
import { Renta } from './Entities/renta.entity';



@Injectable()
export class RentasService {

    constructor(@InjectRepository(Renta)
    private readonly rentaRepository: Repository<Renta>
    ) { }

    async obtenerRentas(): Promise<Renta[]> {
        return await this.rentaRepository.find();
    }

    async obtenerRenta(id: number): Promise<Renta> {
        return await this.rentaRepository.findOne(id);
    }

    async crearRenta(renta: RentaDto): Promise<Renta> {
        return await this.rentaRepository.save(renta);
    }

    async actualizarRenta(id: number, renta: RentaDto): Promise<Renta> {
        const viejaRenta = await this.obtenerRenta(id);
        const nuevaRenta = Object.assign(viejaRenta, renta);
        return await this.rentaRepository.save(nuevaRenta);
    }

    async eliminarRenta(id: number): Promise<any> {
        return await this.rentaRepository.delete(id);
    }

}