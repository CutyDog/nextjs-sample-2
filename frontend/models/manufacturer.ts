import { toCamel } from "../lib/transform_keys";

export interface IManufacturer {
  id: number,
  country: string,
  name: string,
  createdAt: Date,
  updatedAt: Date,
}

export class Manufacturer implements IManufacturer {
  static readonly TYPE = 'manufacturers';

  id: number;
  country: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(jsonData: any) {
    const {
      id,
      country,
      name,
      createdAt,
      updatedAt
    } = jsonData;

    this.id = id;
    this.country = toCamel(country);
    this.name = toCamel(name);
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
