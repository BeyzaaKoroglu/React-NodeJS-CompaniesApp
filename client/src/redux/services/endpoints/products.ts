import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductFormValues } from '../../../components/ProductForm/ProductForm.types';
import instance from '../instance';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const res = await instance.get('/products');
    return res.data.products;
  }
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product: ProductFormValues) => {
    await instance.post(`/products`, product);
  }
);
