import { useAppSelector } from '../../redux/store';
import CompanyForm from '../CompanyForm';
import ProductForm from '../ProductForm';
import { Styled } from './Modal.styled';

const Modal = () => {
  const modalType = useAppSelector((state) => state.modal.modalType);

  return (
    <Styled>
      {modalType === 'addCompany' || modalType === 'editCompany' ? (
        <CompanyForm />
      ) : (
        <ProductForm />
      )}
    </Styled>
  );
};

export default Modal;
