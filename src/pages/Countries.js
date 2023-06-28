import React from 'react';
import CountriesList from '../components/CountriesList';
import continent from '../assests/continent.png';

const Countries = () => (
  <>
    <img src={continent} alt="world map" className="home-bg" />
    <div className="title-box flex">
      <h1>Europe</h1>
      <h2>Air Pollution statistics</h2>
      <span>2023</span>
    </div>
    <CountriesList />
  </>
);

export default Countries;
