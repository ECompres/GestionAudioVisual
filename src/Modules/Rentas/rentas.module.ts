import { RentasController } from './rentas.controller';
import { RentasService } from './rentas.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Renta } from './Entities/renta.entity';

@Module({
    imports: [
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
