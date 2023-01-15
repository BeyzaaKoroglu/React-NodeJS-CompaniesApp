import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import companiesSlice from './companies/companiesSlice';
import modalSlice from './modal/modalSlice';
import productsSlice from './products/productsSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    companies: companiesSlice,
    products: productsSlice,
    modal: modalSlice,
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
