import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TipoEquipoDto } from './dto/tipo-equipo.dto';
import { TipoEquipoService } from './tipo-equipo.service';

@Controller('TipoEquipo')
export class TipoEquipoController {

    constructor(
        private tipoEquipoService: TipoEquipoService
    ) { }

    @Get('get')
    async obtenrTipoEquipos() {
        return await this.tipoEquipoService.obtenerTipoEquipos();
    }

    @Get(':id')
    async obtenerTipoEquipo(@Param('id') id: number) {
        return await this.tipoEquipoService.obtenerTipoEquipo(id);
    }

    @Post()
    async crearTipoEquipo(@Body() tipoEquipo: TipoEquipoDto) {
        return await this.tipoEquipoService.crearTipoEquipo(tipoEquipo);
    }

    @Put(':id')
    async actualizarTipoEquipo(@Param('id') id: number, tipoEquipo: TipoEquipoDto) {
        return await this.tipoEquipoService.actualizarTipoEquipo(id, tipoEquipo);
    }

    @Delete(':id')
    async eliminarTipoEquipo(@Param('id') id: number) { 
        return await this.tipoEquipoService.eliminarTipoEquipo(id);
    }
}
