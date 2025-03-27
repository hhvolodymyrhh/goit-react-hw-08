import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/slice';
import filterReducer from './filter/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
    aut: authReducer,
  },
  });