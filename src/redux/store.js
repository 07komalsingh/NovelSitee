import { configureStore } from '@reduxjs/toolkit';
import novelsReducer from './novelsSlice';


const store = configureStore({
  reducer: {
    novels: novelsReducer,
    
  },
});

export default store;
