import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid'
import { NotFoundError } from 'rxjs';

@Injectable()
export class BrandsService {

  private brands: Brand[] = []

  create(createBrandDto: CreateBrandDto) {
    
    const brand =   {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: Date.now()
    }
    this.brands.push( brand );
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id);
    if(!brand) throw new NotFoundException(`Brand with id ${id}  no found`);

    return brand;
    
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    
    let brandDB = this.findOne( id );
    
    if( updateBrandDto.id && updateBrandDto.id !== id )
        throw new BadRequestException(`Brand id is not valid inside body`);

    this.brands = this.brands.map( brand => {

        if ( brand.id === id ) {
            brandDB = { ...brandDB,...updateBrandDto, id, updateAt: Date.now() }
            return brandDB;
        }

        return brand;
    })
    
    return brandDB;
  }

  remove(id: string) {
    let brandBD = this.findOne(id);
    this.brands = this.brands.filter( brand => brand.id !== brandBD.id)

  }


  fillBrandsWithSeedData( brands: Brand[]) {

    this.brands = [...brands]

  }
}
