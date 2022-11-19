import { Manufacturer, getIndexData, getShowData } from "../api/manufacturers";
import React from "react";
import type { NextPage } from "next";

interface manufacturerPagePropes {
  manufacturer: any
}

const ManufacturerPage: NextPage<manufacturerPagePropes> = ({ manufacturer }) => {
  return (
    <div>
      
    </div>
  );
}

export default ManufacturerPage;

export async function getManufacturersIds() {
  const resposeData: Manufacturer[] = await getIndexData();
  return resposeData.map((data) => {
    return data.id
  });
}

export async function getStaticPaths() {
  const ids: number[] = await getManufacturersIds();
  return {
    ids,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const manufacturer = await getShowData(params.id);
  return {
    props: {
      manufacturer,
    },
  };
}
