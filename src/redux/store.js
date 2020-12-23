import { configureStore } from '@reduxjs/toolkit';
import heroReducer from '../redux/heroSlice';

export default configureStore({
  reducer: {
    hero: heroReducer,
  },
});
