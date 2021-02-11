import { UsuariosModule } from './Modules/Usuarios/usuarios.module';
import { TipoUsuariosModule } from './Modules/Tipo Usuarios/tipo-usuarios.module';
import { TipoEquipoModule } from './Modules/Tipo Equipo/tipo-equipo.module';
import { ModeloModule } from './Modules/Modelo/modelo.module';
import { MarcaModule } from './Modules/Marca/marca.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoModule } from './Modules/Equipo/equipo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test1',
      password: '123',
      database: 'audiovisual',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuariosModule,
    TipoUsuariosModule,
    TipoEquipoModule,
    ModeloModule,
    MarcaModule,
    EquipoModule
  ],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule { }
