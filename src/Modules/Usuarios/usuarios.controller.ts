import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioDto } from './dto/usuarios.dto';
import { UsuariosService } from './usuarios.service';

@Controller('Usuarios')
export class UsuariosController {

    constructor(private readonly usuarioService: UsuariosService) { }

    @Get()
    async obtenerUsuarios() {
        return await this.usuarioService.obtenerUsuarios();
    }

    @Get(':id')
    async obtenerUsuario(@Param('id') id: number) {
        return await this.usuarioService.obtenerUsuario(id);
    }

    @Post()
    async crearUsuario(@Body() usuario: UsuarioDto) {
        return await this.usuarioService.crearUsuario(usuario);
    }

    @Put(':id')
    async actualizarUsuario(@Param('id') id: number, @Body() usuario: UsuarioDto) {
        return await this.usuarioService.actualizarUsuario(id, usuario);
    }

    @Delete(':id')
    async eliminarUsuario(@Param('id') id: number){
        return await this.usuarioService.eliminarUsuario(id);
    }
}
