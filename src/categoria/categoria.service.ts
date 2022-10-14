import { Injectable,Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor( 
    @Inject("CATEGORIA_REPOSITORY")
    private categoriaRepository: Repository<Categoria>){}
  
    async Listar(): Promise<Categoria[]>{
      return this.categoriaRepository.find();
    } 
  private produtos: Categoria[]=[]
  create(createCategoriaDto: CreateCategoriaDto) {
    const idMaxAtual = this.produtos[this.produtos.length -1]?. id_ct2 || 0;
    const id_ct2 = idMaxAtual + 1;
    const categoria = {
      id_ct2,
      ...createCategoriaDto
    };
    this.produtos.push(categoria)
    return categoria;
  }

  
  

  findAll() {
    return this.produtos;
  }

  findOne(id_ct2: number) {
     const index = this.produtos.findIndex((categoria)=> categoria.id_ct2===id_ct2)
      return this.produtos[index]
     // return `This action returns a #${id} user`;
    
  
  }

  update(id_ct2: number, updateCategoriaDto: UpdateCategoriaDto) {
    const produtos= this.findOne(id_ct2)
    const newCategoria ={
      ...produtos ,
      ... updateCategoriaDto,
    }
      const index = this.produtos.findIndex((categoria) => categoria.id_ct2 === id_ct2)
      this.produtos[index] = newCategoria
    
    return newCategoria;
  }
  

  remove(id_ct2: number) {
  const index = this.produtos.findIndex((categoria) => categoria.id_ct2 === id_ct2)

  if (index === -1){
    throw new NotFoundException(`Usuário com o id ${id_ct2} não encontrado`) // excecao quando algo não for encontrado  em http

  }
  this.produtos.splice(index,1);
}

}