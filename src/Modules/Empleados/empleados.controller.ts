import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmpleadoDto } from './dto/empleado.dto';
import { login } from './dto/login.dto';
import { EmpleadosService } from './empleados.service';

@Controller('Empleados')
export class EmpleadosController {

    constructor(private empleadosService: EmpleadosService) { }

    @Get('get')
    async obtenerEmpleados() {
        return await this.empleadosService.obtenerEmpleados();
    }

    @Get(':id')
    async obtenerEmpleado(@Param('id') id: number) {
        return await this.empleadosService.obtenerEmpleado(id);
    }

    @Post()
    async crearEmpleado(@Body() Empleado: EmpleadoDto) {
        return await this.empleadosService.crearEmpleado(Empleado);
    }

    @Put(':id')
    async actualizarEmpleado(@Param('id') id: number, Empleado: EmpleadoDto) {
        return await this.empleadosService.actualizarEmpleado(id, Empleado);
    }

    @Delete(':id')
    async eliminarEmpleado(@Param('id') id: number) {
        return await this.empleadosService.eliminarEmpleado(id);
    }

    @Post("login")
    async login(@Body() login: login) {
        return await this.empleadosService.login(login);
    }
}
