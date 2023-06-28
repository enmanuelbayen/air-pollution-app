import React from 'react';
import PropTypes from 'prop-types';

const AirItems = ({ detailItem }) => (
  <li className="pollution-data flex">
    <p>{detailItem.name}</p>
    <div className="pollution-value">
      <p>
        {detailItem.value}
        μg/m3
      </p>
    </div>
  </li>
);

AirItems.propTypes = {
  detailItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default AirItems;
