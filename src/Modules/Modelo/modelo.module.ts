import { ModeloService } from './modelo.service';
import { ModeloController } from './modelo.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modelo } from './Entities/modelo.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Modelo
        ])
    ],
    controllers: [
        ModeloController,],
    providers: [
        ModeloService,],
    exports:[ModeloService]
})
export class ModeloModule { }
