import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCompanies } from '../services/endpoints/companies';
import { CompaniesStateType, CompanyType } from './types';

const initialState: CompaniesStateType = {
  allCompanies: [],
  editCompany: undefined,
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    handleEditCompany(state, action: PayloadAction<CompanyType>) {
      state.editCompany = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getAllCompanies.fulfilled,
      (state, action: PayloadAction<CompanyType[]>) => {
        state.allCompanies = action.payload;
      }
    );
  },
});

export const { handleEditCompany } = companiesSlice.actions;
export default companiesSlice.reducer;
