import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCompanies } from '../services/endpoints/companies';
import { CompaniesStateType, CompanyType } from './types';

const initialState: CompaniesStateType = {
  allCompanies: [],
  editCompany: undefined,
  searchKey: '',
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    handleEditCompany(state, action: PayloadAction<CompanyType>) {
      state.editCompany = action.payload;
    },
    handleCompanySearchKey(state, action: PayloadAction<string>) {
      state.searchKey = action.payload;
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

export const { handleEditCompany, handleCompanySearchKey } =
  companiesSlice.actions;
export default companiesSlice.reducer;
