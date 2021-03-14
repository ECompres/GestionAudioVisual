import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import e from 'express';
import { Repository } from 'typeorm';
import { valida_cedula } from '../global/validar-cedula';
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

    async crearEmpleado(empleado: EmpleadoDto): Promise<any> {
        const empleadoCed = await this.obtenerEmpleadoCedula(empleado.CEDULA);
        if(!empleadoCed){
            if(valida_cedula(empleado.CEDULA)){
                return await this.empleadoRepository.save(empleado);
            }else{
                return "La cédula es invalida";
            }    
        }else{
            return "Cédula ya registrada";
        }
    }

    async obtenerEmpleadoCedula(ced): Promise<any>{
        return await this.empleadoRepository.findOne({
            where:{
                CEDULA: ced
            }
        })
    };

    async actualizarEmpleado(id: number, empleado: EmpleadoDto): Promise<any> {
        if(valida_cedula(empleado.CEDULA)){
            const viejoEmpleado = await this.obtenerEmpleado(id);
            const nuevoEmpleado = Object.assign(viejoEmpleado, empleado)
            return await this.empleadoRepository.save(nuevoEmpleado);
        }else{
            return "La cédula es invalida";
        }
    }

    async eliminarEmpleado(id: number): Promise<any> {
        return await this.empleadoRepository.delete(id);
    }
}
