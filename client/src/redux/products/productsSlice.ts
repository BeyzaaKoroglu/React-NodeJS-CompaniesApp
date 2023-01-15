import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllProducts } from '../services/endpoints/products';
import { ProductsStateType, ProductType } from './types';

const initialState: ProductsStateType = {
  allProducts: [],
  editProduct: undefined,
  searchKey: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    handleEditProduct(state, action: PayloadAction<ProductType>) {
      state.editProduct = action.payload;
    },
    handleProductSearchKey(state, action: PayloadAction<string>) {
      state.searchKey = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getAllProducts.fulfilled,
      (state, action: PayloadAction<ProductType[]>) => {
        state.allProducts = action.payload;
      }
    );
  },
});

export const { handleEditProduct, handleProductSearchKey } =
  productsSlice.actions;
export default productsSlice.reducer;
