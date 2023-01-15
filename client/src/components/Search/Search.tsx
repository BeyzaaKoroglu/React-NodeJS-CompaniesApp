import { ChangeEvent, FC } from 'react';
import { handleCompanySearchKey } from '../../redux/companies/companiesSlice';
import { handleProductSearchKey } from '../../redux/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Styled } from './Search.styled';
import { SearchProps } from './Search.types';

const Search: FC<SearchProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const productSearchKey = useAppSelector((state) => state.products.searchKey);
  const companySearchKey = useAppSelector((state) => state.companies.searchKey);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    type === 'company'
      ? dispatch(handleCompanySearchKey(e.target.value))
      : dispatch(handleProductSearchKey(e.target.value));
  };

  return (
    <Styled
      onChange={handleChange}
      value={type === 'company' ? companySearchKey : productSearchKey}
      placeholder={type === 'company' ? 'Search Company' : 'Search Product'}
    />
  );
};

export default Search;
