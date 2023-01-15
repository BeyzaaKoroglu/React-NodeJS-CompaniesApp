import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompanyFormValues } from '../../../components/CompanyForm/CompanyForm.types';
import instance from '../instance';

export const getAllCompanies = createAsyncThunk(
  'companies/getAllCompanies',
  async () => {
    const res = await instance.get('/companies');
    console.log(res.data.companies.sort());

    return res.data.companies.sort((a: any, b: any) =>
      b.createdAt > a.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
    );
  }
);

export const createCompany = createAsyncThunk(
  'companies/createCompany',
  async (company: CompanyFormValues) => {
    await instance.post(`/companies`, company);
  }
);

export const updateCompany = createAsyncThunk(
  'companies/updateCompany',
  async (company: CompanyFormValues) => {
    await instance.put(`/companies/${company._id}`, company);
  }
);

export const deleteCompany = createAsyncThunk(
  'companies/deleteCompany',
  async (id: string) => {
    await instance.delete(`/companies/${id}`);
  }
);
