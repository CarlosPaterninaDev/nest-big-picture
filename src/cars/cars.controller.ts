import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Car, CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const car = this.carsService.findOneById(+id);

    if (!car) throw new NotFoundException(`Car with id ${id} no found`);

    return car;
  }

  @Post()
  create(@Body() payload: Car) {
    return {
      payload
    }
  }


  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: Car) {
    return {
      id
    }
  }


  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id
    }
  }
}
