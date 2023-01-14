import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllProducts } from '../services/endpoints/products';
import { ProductsStateType, ProductType } from './types';

const initialState: ProductsStateType = {
  allProducts: [],
  editProduct: undefined,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    handleEditProduct(state, action: PayloadAction<ProductType>) {
      state.editProduct = action.payload;
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

export const { handleEditProduct } = productsSlice.actions;
export default productsSlice.reducer;
