
import { identity } from "rxjs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Categoria {
@PrimaryGeneratedColumn()
id_ct2: number;
@Column({length: 50})
decoracao:string;
@Column({length: 50})
moveis:string;
}