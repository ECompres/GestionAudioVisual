import { TecnologiasConexionController } from './tecnologias-conexion.controller';
import { TecnologiasConexionService } from './tecnologias-conexion.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TecnologiaConexion } from './Entities/tecnologia-conexion.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TecnologiaConexion
        ])
    ],
    controllers: [
        TecnologiasConexionController,
    ],
    providers: [
        TecnologiasConexionService,
    ],
})
export class TecnologiasConexionModule { }
