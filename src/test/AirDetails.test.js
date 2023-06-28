import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router, useSearchParams } from 'react-router-dom';
import AirDetails from '../components/AirDetails';

jest.mock('react-redux');

describe('AirDetails', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({
      details: [
        { name: 'Pollutant 1', value: '100' },
        { name: 'Pollutant 2', value: '200' },
      ],
      country: 'Country',
      capital: 'Capital',
      isLoading: false,
    });

    useDispatch.mockReturnValue(jest.fn());
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  it('renders the component with the provided details', () => {
    const history = createMemoryHistory();
    const mockSearchParams = new URLSearchParams('?lat=mocked-lat&lon=mocked-lon');
    const mockSearchParamsGet = jest.fn().mockReturnValueOnce('mocked-lat').mockReturnValueOnce('mocked-lon');
    jest.spyOn(mockSearchParams, 'get').mockImplementation(mockSearchParamsGet);

    const { getByText, getAllByRole } = render(
      <Router history={history}>
        <AirDetails />
      </Router>
    );

    const chartElement = getByRole('figure');
    const headerElement = getByText('Country/ Capital - Air pollution stats');
    const pollutant1Element = getByText('Pollutant 1');
    const pollutant2Element = getByText('Pollutant 2');

    expect(chartElement).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(pollutant1Element).toBeInTheDocument();
    expect(pollutant2Element).toBeInTheDocument();

    const pollutantElements = getAllByRole('listitem');
    expect(pollutantElements).toHaveLength(2);
  });

  it('renders a loading message when isLoading is true', () => {
    useSelector.mockReturnValueOnce({
      isLoading: true,
    });

    const { getByText } = render(<AirDetails />);

    const loadingElement = getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  it('renders a message when latitude and longitude are unavailable', () => {
    useSelector.mockReturnValueOnce({
      lat: null,
      lon: null,
    });

    const { getByText } = render(<AirDetails />);

    const unavailableElement = getByText('Latitude and longitude unavailable.');
    expect(unavailableElement).toBeInTheDocument();
  });

  it('renders a message when details are empty', () => {
    useSelector.mockReturnValueOnce({
      details: [],
    });

    const { getByText } = render(<AirDetails />);

    const noDetailsElement = getByText('No details available.');
    expect(noDetailsElement).toBeInTheDocument();
  });
});
