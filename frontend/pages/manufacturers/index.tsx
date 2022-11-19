import { Manufacturer, getIndexData } from "../api/manufacturers";
import { GetServerSideProps } from 'next';
import React from "react";
import type { NextPage } from "next";

interface manufacturersPagePropes {
  manufacturers: any[]
}

const ManufacturersPage: NextPage<manufacturersPagePropes> = ({ manufacturers }) => {
  return (
    <div>
      <title>manufacturer index page.</title>
      <h1>manufacturer list.</h1>
      <ul>
        {
          manufacturers.map((manufacturer: Manufacturer) => {
            return (
              <div className='manufacturer-item'>
                <h3>{manufacturer.name}</h3>
                <p>{manufacturer.country}</p>
              </div>
            );
          })
        }
      </ul>
    </div>
  );
}

export default ManufacturersPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const manufacturers: Manufacturer[] = await getIndexData();
  return {
    props: { manufacturers }
  };
}

