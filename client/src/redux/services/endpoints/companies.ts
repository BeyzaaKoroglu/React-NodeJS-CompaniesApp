import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompanyFormValues } from '../../../components/CompanyForm/CompanyForm.types';
import instance from '../instance';

export const getAllCompanies = createAsyncThunk(
  'companies/getAllCompanies',
  async () => {
    const res = await instance.get('/companies');
    return res.data.companies;
  }
);

export const createCompany = createAsyncThunk(
  'companies/createCompany',
  async (company: CompanyFormValues) => {
    await instance.post(`/companies`, company);
  }
);
