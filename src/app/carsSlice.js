import { createSlice } from '@reduxjs/toolkit';
import { fetchColors, fetchManufacturers, fetchCars, fetchCarDetail } from './asyncActions';

export const initialState = {
  colors: {
    data: [],
    isLoaded: false
  },
  manufacturers: {
    data: [],
    isLoaded: false
  },
  cars: {
    data: [],
    totalPageCount: 100,
    totalCarsCount: 1000,
    isLoaded: false
  },
  carDetail: {},
  currentPage: 1,
  manufacturer: null,
  sorting: null,
  color: null,
  error: null
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage++;
    },
    decrementPage: (state) => {
      state.currentPage--;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    changeColor: (state, action) => {
      state.color = action.payload;
    },
    changeManufacturer: (state, action) => {
      state.manufacturer = action.payload;
    },
    changeSorting: (state, action) => {
      state.sorting = action.payload;
    },
    clearCarDetail: (state) => {
      state.carDetail = {};
    }
  },
  extraReducers: {
    [fetchColors.fulfilled]: (state, action) => {
      state.colors.data = action.payload.colors;
      state.colors.isLoaded = true;
    },
    [fetchColors.rejected]: (state) => {
      state.error = 'Something went wrong! Please refresh the page.';
      state.colors.isLoaded = true;
    },
    [fetchManufacturers.fulfilled]: (state, action) => {
      state.manufacturers.data = action.payload.manufacturers;
      state.manufacturers.isLoaded = true;
    },
    [fetchManufacturers.rejected]: (state) => {
      state.error = 'Something went wrong! Please refresh the page.';
      state.manufacturers.isLoaded = false;
    },
    [fetchCars.pending]: (state) => {
      state.cars.data = [];
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.cars.data = action.payload.cars;
      state.cars.totalCarsCount = action.payload.totalCarsCount;
      state.cars.totalPageCount = action.payload.totalPageCount;
      state.cars.isLoaded = true;
    },
    [fetchCars.rejected]: (state) => {
      state.cars.data = [];
      state.cars.isLoaded = false;
      state.error = 'Something went wrong! Please refresh the page.';
    },
    [fetchCarDetail.fulfilled]: (state, action) => {
      state.carDetail = action.payload.car;
    },
    [fetchCarDetail.rejected]: (state) => {
      state.carDetail.data = {};
      state.error = 'Something went wrong! Please refresh the page.';
    }
  }
});

export const { incrementPage, decrementPage, changePage, changeColor, changeManufacturer, clearCarDetail, changeSorting } = carsSlice.actions;

export default carsSlice.reducer;
