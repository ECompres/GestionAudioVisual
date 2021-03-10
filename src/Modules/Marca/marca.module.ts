import { MarcaController } from './marca.controller';
import { MarcaService } from './marca.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './Entities/marca.entity';
import { ModeloModule } from '../Modelo/modelo.module';

@Module({
    imports: [
        ModeloModule,
        TypeOrmModule.forFeature([
            Marca
        ])
    ],
    controllers: [
        MarcaController,],
    providers: [
        MarcaService,],
})
export class MarcaModule { }
