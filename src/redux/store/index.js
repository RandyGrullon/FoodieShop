// src/redux/store/index.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../reducers/authReducer';
import cartReducer from '../reducers/cartReducer';

// Configuración para redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Combinar reducers
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

// Usar persistReducer para hacer que rootReducer sea persistente
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crear el store con configureStore
export const store = configureStore({
  reducer: persistedReducer,
});

// Crear el persistor
export const persistor = persistStore(store);
