import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TecnologiaConexionDto } from './dto/tecnologia-conexion.dto';
import { TecnologiaConexion } from './Entities/tecnologia-conexion.entity';
import { TecnologiasConexionService } from './tecnologias-conexion.service';

@Controller('TecnologiasConexion')
export class TecnologiasConexionController {

    constructor(
        private tecnologiasConexionService: TecnologiasConexionService
    ) { }

    @Get()
    async obtenerTecnologiasConexion() {
        return await this.tecnologiasConexionService.obtenerTecnologiasConexion();
    }

    @Get(':id')
    async obtenerTecnologiaConexion(@Param('id') id: number) {
        return await this.tecnologiasConexionService.obtenerTecnologiaConexion(id);
    }

    @Post()
    async crearTecnologiaConexion(@Body() tecnologiaConexion: TecnologiaConexionDto) {
        return await this.tecnologiasConexionService.crearTecnologiaConexion(tecnologiaConexion);
    }

    @Put(':id')
    async actualizarTecnologiaConexion(@Param('id') id: number, @Body() tecnologiaConexion: TecnologiaConexionDto) {
        return await this.tecnologiasConexionService.actualizarTecnologiaConexion(id, tecnologiaConexion);
    }

    @Delete(':id')
    async eliminarTecnologiaConexion(@Param('id') id: number) {
        return await this.tecnologiasConexionService.eliminarTecnologiaConexion(id);
    }


}
