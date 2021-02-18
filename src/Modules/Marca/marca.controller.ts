import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MarcaDto } from './dto/marca.dto';
import { MarcaService } from './marca.service';

@Controller('Marca')
export class MarcaController {

    constructor(private marcaService: MarcaService) { }

    @Get('get')
    async obtenerMarcas() {
        return await this.marcaService.obtenerMarcas();
    }

    @Get(':id')
    async obtenerMarca(@Param('id') id: number) {
        return await this.marcaService.obtenerMarca(id);
    }

    @Post()
    async crearMarca(@Body() marca: MarcaDto) {
        return await this.marcaService.crearMarca(marca)
    }

    @Put(':id')
    async actualizarMarca(@Param('id') id: number, @Body() marca: MarcaDto) {
        return await this.marcaService.actualizarMarca(id, marca);
    }

    @Delete(':id')
    async eliminarMarca(@Param('id') id: number) {
        return await this.marcaService.eliminarMarca(id);
    }

}
