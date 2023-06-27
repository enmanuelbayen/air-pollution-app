import React from 'react';
import PropTypes from 'prop-types';

const AirItems = ({ detailItem }) => (
  <li>
    <p>{detailItem.name}</p>
    <p>{detailItem.value}</p>
    <span> μg/m3</span>
  </li>
);

AirItems.propTypes = {
  detailItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default AirItems;
