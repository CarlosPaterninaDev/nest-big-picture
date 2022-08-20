import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';

// @UsePipes( ValidationPipe ) // Mover a PipesGlobales
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    const car = this.carsService.findOneById(id);

    if (!car) throw new NotFoundException(`Car with id ${id} no found`);

    return car;
  }

  @Post()
  // @UsePipes( ValidationPipe )
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create( createCarDto )

  }


  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, 
         @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update( id, updateCarDto )
  }


  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
