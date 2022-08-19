import { Injectable } from '@nestjs/common';

export interface Car {
  id: number;
  brand: string;

}

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      brand: 'Sandero',
    },
    {
      id: 2,
      brand: 'Logan',
    },
    {
      id: 3,
      brand: 'Capture',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    return this.cars.find( car => car.id === id );
  }

  create( car: Car){
    this.cars.push(car);
    return this.cars
  }
}
