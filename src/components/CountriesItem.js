import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const CountriesItem = ({ data }) => (
  <>
    <li className="country-list flex">
      <div className="country-list-box1 flex">
        <span>{`Lat: ${data.latitude}`}</span>
        <span>{`Lon: ${data.longitude}`}</span>
        <NavLink className="country-data" to={`/stats?lat=${data.latitude}&lon=${data.longitude}`}>
          <BsArrowRightCircle />
        </NavLink>
      </div>
      <div className="country-list-box2">
        <img src={`${data.image}`} alt={`${data.country}`} className="country-shape" />
      </div>
      <div className="country-list-box3">
        <h3>{data.country}</h3>
        <p>{data.capital}</p>
      </div>
    </li>
  </>
);

CountriesItem.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountriesItem;
