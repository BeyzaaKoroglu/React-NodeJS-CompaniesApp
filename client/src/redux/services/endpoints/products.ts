import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductFormValues } from '../../../components/ProductForm/ProductForm.types';
import instance from '../instance';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const res = await instance.get('/products');
    return res.data.products.sort((a: any, b: any) =>
      b.createdAt > a.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
    );
  }
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product: ProductFormValues) => {
    await instance.post(`/products`, product);
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (product: ProductFormValues) => {
    await instance.put(`/products/${product._id}`, product);
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id: string) => {
    await instance.delete(`/products/${id}`);
  }
);
