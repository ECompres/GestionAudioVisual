import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoUsuarios } from './Entities/tipo-usuarios.entity';
import { TipoUsuarioController } from './tipo-usuario.controller';
import { TipoUsuarioService } from './tipo-usuario.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TipoUsuarios
        ])
    ],
    controllers: [TipoUsuarioController],
    providers: [TipoUsuarioService],
})
export class TipoUsuariosModule { }
