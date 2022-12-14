import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModele } from 'src/database/database.modules';
import { categoriaProviders } from './categoria.providers';

@Module({
  imports: [DatabaseModele,],
  controllers: [CategoriaController],
  providers: [
    ...categoriaProviders,
    CategoriaService]
})
export class CategoriaModule {}
