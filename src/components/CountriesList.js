import React, { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import EuropeCountries from './EuropeCountries';
import CountriesItem from './CountriesItem';

const CountriesList = () => {
  const [search, setSearch] = useState('');
  const { searchFilter } = useSelector((state) => state.detail);

  return (
    <div>
      <div className="searchBar-container">
        <div>
          <div className="list-titleBox">
            <h2 className="countryList-title">Details by countries</h2>
            <form>
              <CgSearch />
              <input
                type="text"
                className="search-bar"
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${searchFilter ? 'capitals' : 'countries'}`}
              />
            </form>
          </div>
        </div>
      </div>
      <ul className="country-ul grid">
        {!searchFilter
            && EuropeCountries
              .filter((item) => (search.toLocaleLowerCase() === ''
                ? item
                : item.country.toLocaleLowerCase().includes(search)))
              .map((data) => <CountriesItem key={data.country} data={data} className="country-list" />)}
      </ul>
    </div>
  );
};

export default CountriesList;
