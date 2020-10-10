import React from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../app/carsSlice';
import CarCard from '../Card/Card';
import './index.css';

const CarList = () => {
  const cars = useSelector(selectCars);
  const { totalCarsCount, totalPageCount } = cars;
  return (
    <div className="d-flex flex-column w-75 p-4">
      <h1>Available Cars</h1>
      <p>Showing {totalCarsCount / totalPageCount} of {cars.totalCarsCount} Results</p>
      {cars.cars.map(car => car && <CarCard key={car.stockNumber} car={car} />)}
      <div className="d-flex justify-content-center mt-3">
        <span className="pag-button">First</span>
        <span className="pag-button">Previous</span>
        <span className="page-count">Page 2 of 10</span>
        <span className="pag-button">Next</span>
        <span className="pag-button">Last</span>
      </div>
    </div>
  );
};

export default CarList;
