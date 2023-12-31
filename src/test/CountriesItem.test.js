import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import CountriesItem from '../components/CountriesItem';

test('renders component with correct data', () => {
  const component = renderer.create(
    <MemoryRouter>
      <CountriesItem
        data={{ latitude: 20, longitude: 10 }}
        imageUrl="image-url"
        country="Country"
        capital="Capital"
      />
    </MemoryRouter>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
