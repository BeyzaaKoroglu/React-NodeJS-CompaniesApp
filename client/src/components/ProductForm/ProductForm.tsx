import { ChangeEvent, useEffect, useState } from 'react';
import { handleShowModal } from '../../redux/modal/modalSlice';
import {
  createProduct,
  getAllProducts,
  updateProduct,
} from '../../redux/services/endpoints/products';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ProductFormValues } from './ProductForm.types';

const ProductForm = () => {
  const allCompanies = useAppSelector((state) => state.companies.allCompanies);
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const editProduct = useAppSelector((state) => state.products.editProduct);
  const modalType = useAppSelector((state) => state.modal.modalType);
  const dispatch = useAppDispatch();

  const [formValues, setFormValues] = useState<ProductFormValues>({
    name: '',
    category: '',
    amount: undefined,
    amountUnit: '',
    company: '',
  });

  useEffect(() => {
    if (modalType === 'editProduct' && editProduct)
      setFormValues({
        _id: editProduct._id,
        name: editProduct.name,
        category: editProduct.category,
        amount: editProduct.amount,
        amountUnit: editProduct.amountUnit,
        company: editProduct.company._id,
      });
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAddClick = () => {
    if (
      formValues.name === '' ||
      formValues.amount === undefined ||
      formValues.amountUnit === ''
    )
      alert(
        `${formValues.name === '' ? 'Product name is required\n' : ''}${
          formValues.amount === undefined ? 'Product amount is required\n' : ''
        } ${
          formValues.amountUnit === '' ? 'Product amount unit is required' : ''
        }`
      );
    else {
      if (allProducts.find((product) => product.name === formValues.name))
        alert('The product already exists');
      else {
        dispatch(createProduct(formValues)).then(() =>
          dispatch(getAllProducts())
        );
        dispatch(handleShowModal());
      }
    }
  };

  const handleEditClick = () => {
    if (
      formValues.name === '' ||
      formValues.amount === undefined ||
      formValues.amountUnit === ''
    )
      alert(
        `${formValues.name === '' ? 'Product name is required\n' : ''}${
          formValues.amount === undefined ? 'Product amount is required\n' : ''
        } ${
          formValues.amountUnit === '' ? 'Product amount unit is required' : ''
        }`
      );
    else {
      if (
        allProducts.find((product) => product.name === formValues.name) &&
        formValues.name !== editProduct?.name
      )
        alert('The product already exists');
      else {
        editProduct &&
          dispatch(updateProduct(formValues)).then(() =>
            dispatch(getAllProducts())
          );
        dispatch(handleShowModal());
      }
    }
  };

  const handleCancelClick = () => {
    dispatch(handleShowModal());
  };

  return (
    <div>
      {modalType === 'addProduct' ? (
        <h2>Add New Product</h2>
      ) : (
        <h2>Edit Product</h2>
      )}

      <input
        onChange={handleChange}
        name="name"
        value={formValues.name}
        placeholder="Product Name"
        type="Text"
      />
      <input
        onChange={handleChange}
        name="category"
        value={formValues.category}
        placeholder="Category"
        type="Text"
      />
      <input
        onChange={handleChange}
        name="amount"
        value={formValues.amount}
        placeholder="Amount"
        min={0}
        type="Number"
      />
      <input
        onChange={handleChange}
        name="amountUnit"
        value={formValues.amountUnit}
        placeholder="Amount Unit"
        type="Text"
      />
      {modalType === 'addProduct' && (
        <select
          value={formValues.company}
          onChange={handleChange}
          name="company"
        >
          <option value={''}>Choose Company</option>
          {allCompanies.map((company, index) => (
            <option value={company._id} key={index}>
              {company.name}
            </option>
          ))}
        </select>
      )}

      {modalType === 'addProduct' ? (
        <button onClick={handleAddClick} className="addBtn">
          Add
        </button>
      ) : (
        <button onClick={handleEditClick} className="editBtn">
          Edit
        </button>
      )}

      <button onClick={handleCancelClick} className="cancelBtn">
        Cancel
      </button>
    </div>
  );
};

export default ProductForm;
