import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RentaDto } from './dto/renta.dto';
import { RentasService } from './rentas.service';

@Controller('Rentas')
export class RentasController { 
    constructor(private rentaService: RentasService) { }

    @Get('get')
    async obtenerRentas() {
        return await this.rentaService.obtenerRentas();
    }

    @Get(':id')
    async obtenerRenta(@Param('id') id: number) {
        return await this.rentaService.obtenerRenta(id);
    }

    @Post()
    async crearRenta(@Body() renta: RentaDto) {
        return await this.rentaService.crearRenta(renta);
    }

    @Put(':id')
    async actualizarRenta(@Param('id') id: number, @Body() renta: RentaDto) {
        return await this.rentaService.actualizarRenta(id, renta);
    }

    @Delete(':id')
    async eliminarRenta(@Param('id') id: number){
        return await this.rentaService.eliminarRenta(id);
    }

}
