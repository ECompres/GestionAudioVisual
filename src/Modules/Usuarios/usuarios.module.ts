import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './Entities/usuarios.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Usuarios
        ])
    ],
    controllers: [
        UsuariosController,],
    providers: [
        UsuariosService,],
})
export class UsuariosModule { }
