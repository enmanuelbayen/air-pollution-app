import React from 'react';
import { useSelector } from 'react-redux';
import AirDetails from '../components/AirDetails';

const Details = () => {
  const { country, capital } = useSelector((state) => state.detail);

  return (
    <div>
      <h1>{country}</h1>
      <span>{capital}</span>
      <AirDetails />
    </div>
  );
};

export default Details;
