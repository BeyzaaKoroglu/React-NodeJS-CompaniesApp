import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCompanies } from '../services/endpoints/companies';
import { CompaniesStateType, CompanyType } from './types';

const initialState: CompaniesStateType = {
  allCompanies: [],
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getAllCompanies.fulfilled,
      (state, action: PayloadAction<CompanyType[]>) => {
        state.allCompanies = action.payload;
      }
    );
  },
});

export default companiesSlice.reducer;
