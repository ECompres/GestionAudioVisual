import { RentasController } from './rentas.controller';
import { RentasService } from './rentas.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Renta } from './Entities/renta.entity';
import { EquipoModule } from '../Equipo/equipo.module';
import { EmpleadosModule } from '../Empleados/empleados.module';

@Module({
    imports: [
        EquipoModule,
        EmpleadosModule,
        TypeOrmModule.forFeature([
            Renta
        ])
    ],
    controllers: [
        RentasController,],
    providers: [
        RentasService,],
})
export class RentasModule { }
