import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/slice';
import filterReducer from './filter/slice';
import { authReducer } from './auth/slice';

import {  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'data_token',
  storage,
  whitelist: ['token'],
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)


export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
    auth: persistedAuthReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});
  
export const persistor = persistStore(store)