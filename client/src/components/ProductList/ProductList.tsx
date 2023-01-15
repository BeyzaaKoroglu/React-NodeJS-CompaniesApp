import { useEffect, useState } from 'react';
import { handleModalType, handleShowModal } from '../../redux/modal/modalSlice';
import { ProductType } from '../../redux/products/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import ProductListItem from '../ProductListItem';
import Search from '../Search';
import { Styled } from './ProductList.styled';

const ProductList = () => {
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const searchKey = useAppSelector((state) => state.products.searchKey);
  const dispatch = useAppDispatch();

  const [filteredList, setFilteredList] = useState<ProductType[]>([]);

  useEffect(() => {
    setFilteredList(
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  }, [allProducts, searchKey]);

  const handleAddClick = () => {
    dispatch(handleShowModal());
    dispatch(handleModalType('addProduct'));
  };

  return (
    <Styled>
      <Search type={'product'} />
      <ul>
        <li>
          <b>Name</b>
          <b>Category</b>
          <b>Amount</b>
          <b>Amount Unit</b>
          <b>Company</b>
          <b></b>
          <b>
            <button className="addBtn" onClick={handleAddClick}>
              Add New Product
            </button>
          </b>
        </li>
        {filteredList.map((product, index) => (
          <ProductListItem key={index} product={product} />
        ))}
      </ul>
    </Styled>
  );
};

export default ProductList;
