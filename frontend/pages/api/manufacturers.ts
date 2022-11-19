import type { NextApiRequest, NextApiResponse } from "next";
import { getManufacturersUrl } from "../../lib/api_client";

export interface Manufacturer {
  id: number,
  country: string,
  name: string,
  createdAt: Date,
  updatedAt: Date
}

export async function getIndexData(): Promise<Manufacturer[]> {
  const url = getManufacturersUrl();
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData.map((elem: any) => {
    return {
      id: elem.id,
      country: elem.country,
      name: elem.name,
      createdAt: elem.created_at,
      updatedAt: elem.updated_at
    }
  });
}

export async function getShowData(id: number): Promise<Manufacturer> {
  const url = getManufacturersUrl(id);
  const response = await fetch(url);
  const jsonData = await response.json();
  return  {
      id: jsonData.id,
      country: jsonData.country,
      name: jsonData.name,
      createdAt: jsonData.created_at,
      updatedAt: jsonData.updated_at
  }
}

