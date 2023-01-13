import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../instance';

export const getAllCompanies = createAsyncThunk(
  'companies/getAllCompanies',
  async () => {
    const res = await instance.get('/companies');
    return res.data.companies;
  }
);
