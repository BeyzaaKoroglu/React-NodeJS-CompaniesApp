import { handleModalType, handleShowModal } from '../../redux/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import ProductListItem from '../ProductListItem';
import { Styled } from './ProductList.styled';

const ProductList = () => {
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    dispatch(handleShowModal());
    dispatch(handleModalType('addProduct'));
  };

  return (
    <Styled>
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
        {allProducts.map((product, index) => (
          <ProductListItem key={index} product={product} />
        ))}
      </ul>
    </Styled>
  );
};

export default ProductList;
