/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import AirDetails from '../components/AirDetails';
import chartData from '../components/Chart';

ChartJS.register(ArcElement, Tooltip, Legend);

const Details = () => {
  const { country, capital } = useSelector((state) => state.detail);
  const infoArr = useSelector((state) => state.detail.details);
  console.log(infoArr);

  return (
    <div>
      <div className="chart-box">
        <h2>Doughnut Chart</h2>
        <Doughnut data={chartData(infoArr)} />
      </div>
      <div>
        <h1>{country}</h1>
        <span>{capital}</span>
      </div>
      <AirDetails />
    </div>
  );
};

export default Details;
