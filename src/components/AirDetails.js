/* eslint-disable */
import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchDetails } from '../redux/detail/detailSlice';
import chartData from '../utility/chart';

import AirItems from './AirItems';

ChartJS.register(ArcElement, Tooltip, Legend);

const AirDetails = () => {
  const {
    details, country, capital, isLoading,
  } = useSelector((state) => state.detail);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const infoArr = useSelector((state) => state.detail.details);

  useEffect(() => {
    if (!lat && !lon) {
      return;
    }

    dispatch(fetchDetails({ lat, lon }));
  }, [dispatch, lat, lon]);

  if (!lat || !lon) {
    return <div>Latitude and longitude unavailable.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="chart-box">
        <Doughnut data={chartData(infoArr)} />
      </div>
      <header>
          <h2 className="country-capital">
            {`${country}/ `}
            {`${capital} - Air pollution stats`}
          </h2>
      </header>
      <ul>
        {details && details.length > 0 ? (
          details.map((detailItem) => (
            <AirItems key={detailItem.name} detailItem={detailItem} />
          ))
        ) : (
          <li>No details available.</li>
        )}
      </ul>
    </div>
  );
};

export default AirDetails;
