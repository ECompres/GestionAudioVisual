import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoDto } from './dto/empleado.dto';
import { Empleado } from './Entities/empleado.entity';

@Injectable()
export class EmpleadosService {
    constructor(@InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>) { }

    async obtenerEmpleados(): Promise<Empleado[]> {
        return await this.empleadoRepository.find();
    }

    async obtenerEmpleado(id: number): Promise<Empleado> {
        return await this.empleadoRepository.findOne(id);
    }

    async crearEmpleado(empleado: EmpleadoDto): Promise<Empleado> {
        return await this.empleadoRepository.save(empleado);
    }

    async actualizarEmpleado(id: number, empleado: EmpleadoDto): Promise<Empleado> {
        const viejoEmpleado = await this.obtenerEmpleado(id);
        const nuevoEmpleado = Object.assign(viejoEmpleado, empleado)
        return await this.empleadoRepository.save(nuevoEmpleado);
    }

    async eliminarEmpleado(id: number): Promise<any> {
        return await this.empleadoRepository.delete(id);
    }
}
