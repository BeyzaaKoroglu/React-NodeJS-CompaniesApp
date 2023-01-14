import { FC } from 'react';
import { handleModalType, handleShowModal } from '../../redux/modal/modalSlice';
import { handleEditProduct } from '../../redux/products/productsSlice';
import {
  deleteProduct,
  getAllProducts,
} from '../../redux/services/endpoints/products';
import { useAppDispatch } from '../../redux/store';
import { Styled } from './ProductListItem.styled';
import { ProductListItemProps } from './ProductListItem.types';

const ProductListItem: FC<ProductListItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleEditClick = () => {
    dispatch(handleShowModal());
    dispatch(handleEditProduct(product));
    dispatch(handleModalType('editProduct'));
  };

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure?'))
      dispatch(deleteProduct(product._id)).then(() =>
        dispatch(getAllProducts())
      );
  };

  return (
    <Styled>
      <span>{product.name}</span>
      <span>{product.category}</span>
      <span>{product.amount}</span>
      <span>{product.amountUnit}</span>
      <span>{product.company.name}</span>
      <span>
        <button onClick={handleEditClick} className="editBtn">
          Edit
        </button>
      </span>
      <span>
        <button onClick={handleDeleteClick} className="deleteBtn">
          Delete
        </button>
      </span>
    </Styled>
  );
};

export default ProductListItem;
