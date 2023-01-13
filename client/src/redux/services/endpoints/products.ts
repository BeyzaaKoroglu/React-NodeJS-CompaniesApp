import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../instance';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const res = await instance.get('/products');
    return res.data.products;
  }
);
