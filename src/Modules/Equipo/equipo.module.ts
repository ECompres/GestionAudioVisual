import { EquipoController } from './equipo.controller';
import { EquipoService } from './equipo.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipo } from './Entities/equipo.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Equipo
        ])
    ],
    controllers: [
        EquipoController,],
    providers: [
        EquipoService,],
})
export class EquipoModule { }
