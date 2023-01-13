import { CompanyType } from '../companies/types';

export type ProductsStateType = {
  allProducts: Array<ProductType>;
};

export type ProductType = {
  _id: string;
  name: string;
  category: string;
  amount: number;
  amountUnit: string;
  createdAt: string;
  company: CompanyType;
};
