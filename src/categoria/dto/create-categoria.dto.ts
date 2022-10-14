
import { IsString} from "class-validator";
import { PrimaryColumn } from "typeorm";

export class CreateCategoriaDto {

@IsString()
id:number;
@IsString()
moveis:string;
@IsString()
decoracao: string;

}