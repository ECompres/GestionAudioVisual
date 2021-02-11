import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TipoUsuariosDto } from './dto/tipo-usuarios.dto';
import { TipoUsuarioService } from './tipo-usuario.service';

@Controller('TipoUsuario')
export class TipoUsuarioController {
    constructor(private tipoUsuarioService: TipoUsuarioService) { }

    @Get()
    async obtenerTipoUsuarios() {
        return await this.tipoUsuarioService.obtenerTipoUsuarios();
    }

    @Get(':id')
    async obtenerTipoUsuario(@Param('id') id: number) {
        return await this.tipoUsuarioService.obtenerTipoUsuario(id);
    }

    @Post()
    async crearTipoUsuario(@Body() tipoUsuario: TipoUsuariosDto) {
        return await this.tipoUsuarioService.crearTipoUsuario(tipoUsuario);
    }

    @Put(':id')
    async actualizarTipoUsuario(@Param('id') id: number, tipoUsuario: TipoUsuariosDto) {
        return await this.tipoUsuarioService.actualizarTipoUsuario(id, tipoUsuario);
    }

    @Delete(':id')
    async eliminarTipoUsuario(@Param('id') id: number) { 
        return await this.tipoUsuarioService.eliminarTipoUsuario(id);
    }
}
