import { Bike, getData } from '../api/bikes';
import { GetServerSideProps } from 'next';
import React from 'react';
import type { NextPage } from 'next';

interface BikesPageProps {
  bikes: any[]
}

const BikesPage: NextPage<BikesPageProps> = ({ bikes }) => {
  return (
    <div>
      <title>bike index page.</title>
      <h1>Bike List.</h1>
      <ul className='bike-list'>
        {
          bikes.map((bike: Bike) => {
            return (
              <div className='bike-item' key={bike.id}>
                <h3>{bike.name}</h3>
                <p>{bike.manufacturedDate.toString()}</p>
                <p>{bike.price}円</p>
              </div>
            );
          })
        }
      </ul>
    </div>
  );
}

export default BikesPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const bikes: Bike[] = await getData();
  return {
    props: { bikes }
  };
}
