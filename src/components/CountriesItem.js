import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const CountriesItem = ({ data }) => (
  <div>
    <li className="country-list">
      <div>
        <span>{`Lat: ${data.latitude}`}</span>
        <span>{`Lon: ${data.longitude}`}</span>
        <NavLink className="country-data" to={`/stats?lat=${data.latitude}&lon=${data.longitude}`}>
          <BsArrowRightCircle />
        </NavLink>
      </div>
      <div>
        <p>img central</p>
      </div>
      <div>
        <h3>{data.country}</h3>
        <p>{data.capital}</p>
      </div>
    </li>
  </div>
);

CountriesItem.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default CountriesItem;
