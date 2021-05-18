import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './Entities/empleado.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Empleado
        ])
    ],
    controllers: [
        EmpleadosController,],
    providers: [
        EmpleadosService,],
})
export class EmpleadosModule { }
