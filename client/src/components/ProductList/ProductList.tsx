import { useAppSelector } from '../../redux/store';
import { Styled } from './Product.styled';

const ProductList = () => {
  const allProducts = useAppSelector((state) => state.products.allProducts);

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
          <b></b>
        </li>
        {allProducts.map((product, index) => (
          <li key={index}>
            <span>{product.name}</span>
            <span>{product.category}</span>
            <span>{product.amount}</span>
            <span>{product.amountUnit}</span>
            <span>{product.company.name}</span>
            <span>
              <button className="editBtn">Edit</button>
            </span>
            <span>
              <button className="deleteBtn">Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </Styled>
  );
};

export default ProductList;
