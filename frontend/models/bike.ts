import { toCamel } from "../lib/transform_keys";

export interface IBike {
  id: number,
  displacement: number,
  manufactured_date: Date,
  name: string,
  price: number,
  createdAt: Date,
  updatedAt: Date,
  manufacturerId: number,
}

export class Bike implements IBike {
  static readonly TYPE = 'bikes';

  id: number;
  displacement: number;
  manufactured_date: Date;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  manufacturerId: number;

  constructor(jsonData: any) {
    const {
      id,
      displacement,
      manufactured_date,
      name,
      price,
      createdAt,
      updatedAt,
      manufacturerId
    } = jsonData;

    this.id = id;
    this.displacement = displacement;
    this.manufactured_date = manufactured_date;
    this.name = toCamel(name);
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.manufacturerId = manufacturerId;
  }
}
