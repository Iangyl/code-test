import { configureStore } from '@reduxjs/toolkit';
import codeReducer from '../features/code/codeSlice';
import inputReducer from '../features/input/inputSlice';

const store = configureStore({
  reducer: {
    code: codeReducer,
    values: inputReducer,
  },
});

export default store;
