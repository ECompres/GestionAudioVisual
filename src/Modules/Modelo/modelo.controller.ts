import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { model } from 'mongoose';
import { ModeloDto } from './dto/modelo.dto';
import { ModeloService } from './modelo.service';

@Controller('Modelo')
export class ModeloController {
    constructor(private modeloService: ModeloService) { }

    @Get('get')
    async obtenerModelos() { 
        return await this.modeloService.obtenerModelos();
    }

    @Get(':id')
    async obtenerModelo(@Param('id') id: number) {
        return await this.modeloService.obtenerModelo(id);
    }

    @Post()
    async crearModelo(@Body() modelo: ModeloDto) {
        return await this.modeloService.crearModelo(modelo);
    }

    @Put(':id')
    async actualizarModelo(@Param('id') id: number, @Body() modelo: ModeloDto) {
        return await this.modeloService.actualizarModelo(id, modelo);
    }

    @Delete(':id')
    async eliminarModelo(@Param('id') id: number) {
        return await this.modeloService.eliminarModelo(id);
    }

}
