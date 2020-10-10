import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCars, selectCurrentPage, incrementPage, decrementPage, changePage } from '../../app/carsSlice';
import CarCard from '../Card/Card';
import './index.css';
import cx from 'classnames';

const CarList = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const { totalCarsCount, totalPageCount } = cars;
  return (
    <div className="d-flex flex-column w-75 p-4">
      <h1>Available Cars</h1>
      <p>Showing {totalCarsCount / totalPageCount} of {cars.totalCarsCount} Results</p>
      {cars.cars.map(car => car && <CarCard key={car.stockNumber} car={car} />)}
      <div className="d-flex justify-content-center mt-3">
        <span className={cx({ 'pag-button': currentPage !== 1 })}onClick={() => { currentPage !== 1 && dispatch(changePage(1)); }}>First</span>
        <span className={cx({ 'pag-button': currentPage !== 1 })} onClick={() => { currentPage !== 1 && dispatch(decrementPage()); }}>Previous</span>
        <span className="page-count">Page {currentPage} of {totalPageCount}</span>
        <span className={cx({ 'pag-button': currentPage !== totalPageCount })} onClick={() => { currentPage !== totalPageCount && dispatch(incrementPage()); }}>Next</span>
        <span className={cx({ 'pag-button': currentPage !== totalPageCount })} onClick={() => { currentPage !== totalPageCount && dispatch(changePage(totalPageCount)); }}>Last</span>
      </div>
    </div>
  );
};

export default CarList;
