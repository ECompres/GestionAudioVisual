import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EquipoDTO } from './dto/equipo.dto';
import { EquipoService } from './equipo.service';

@Controller('Equipo')
export class EquipoController {

    constructor(private equipoService: EquipoService) { }

    @Get('get')
    async obtenerEquipos() {
        return await this.equipoService.obtenerEquipos();
    }

    @Get(':id')
    async obtenerEquipo(@Param('id') id: number) {
        return await this.equipoService.obtenerEquipo(id);
    }

    @Post()
    async crearEquipo(@Body() equipo: EquipoDTO) {
        return await this.equipoService.crearEquipo(equipo);
    }

    @Put(':id')
    async actualizarEquipo(@Param('id') id: number, @Body() equipo: EquipoDTO) {
        return await this.equipoService.actualizarEquipo(id, equipo);
    }

    @Delete(':id')
    async eliminarEquipo(@Param('id') id: number){
        return await this.equipoService.eliminarEquipo(id);
    }
}
