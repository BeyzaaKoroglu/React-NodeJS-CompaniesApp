import { ProductType } from '../products/types';

export type ModalStateType = {
  showModal: boolean;
  modalType: ModalType;
};

export type ModalType =
  | 'addCompany'
  | 'editCompany'
  | 'addProduct'
  | 'editProduct';
