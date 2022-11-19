import type { NextApiRequest, NextApiResponse } from 'next';
import { getBikesURL } from '../../lib/api_client';

export interface Bike {
  id: number,
  name: string,
  manufacturedDate: Date,
  manufacturerId: number,
  price: number,
  displacement: number,
  createdAt: Date,
  updatedAt: Date
}

export async function getData() : Promise<Bike[]> {
  const url = getBikesURL();
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData.map((elem: any) => {
    return {
      id: elem.id,
      name: elem.name,
      manufacturedDate: elem.manufactured_date,
      manufacturerId: elem.manufacturer_id,
      price: elem.price,
      displacement: elem.displacement,
      createdAt: elem.created_at,
      updatedAt: elem.updated_at
    }
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Bike[]>
) {
  const data = await getData();
  res.status(200).json(data);
}
