import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get("listar")
  async listar(): Promise<Categoria[]>{
    return this.categoriaService.Listar()
  
  }

  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }



  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const categoria= this.categoriaService.findOne(id);
     if (!categoria){
      throw new NotFoundException(`Usuário com o id ${id} não existe`)
     }
     return categoria;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoriaService.remove(+id);
  }
}
