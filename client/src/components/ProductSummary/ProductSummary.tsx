import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../redux/products/types';
import { useAppSelector } from '../../redux/store';
import { Styled } from './ProductSummary.styled';

const ProductSummary = () => {
  const navigate = useNavigate();
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const [lastProducts, setLastProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setLastProducts(allProducts.slice(0, 3));
  }, [allProducts]);

  return (
    <Styled>
      <div>
        <h2>
          Last Added Products
          <button onClick={() => navigate('/products')} className="linkBtn">
            See more
          </button>
        </h2>
      </div>
      <div className="products">
        {lastProducts.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>
              <b>Category: </b>
              {product.category}
            </p>
            <p>
              <b>Amount: </b>
              {product.amount}
            </p>
            <p>
              <b>Amount Unit: </b>
              {product.amountUnit}
            </p>
            <p>
              <b>Company: </b>
              {product.company.name}
            </p>
          </div>
        ))}
      </div>
    </Styled>
  );
};

export default ProductSummary;
