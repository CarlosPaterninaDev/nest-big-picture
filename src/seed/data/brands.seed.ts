import { Brand } from "src/brands/entities/brand.entity";
import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';


export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'brand 1',
    createdAt: Date.now()
  },
  {
    id: uuid(),
    name: 'brand 2',
    createdAt: Date.now()
  },
  {
    id: uuid(),
    name: 'brand 3',
    createdAt: Date.now()
  }
]