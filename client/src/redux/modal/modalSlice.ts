import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalStateType, ModalType } from './types';

const initialState: ModalStateType = {
  showModal: false,
  modalType: 'addCompany',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleShowModal(state) {
      state.showModal = !state.showModal;
    },
    handleModalType(state, action: PayloadAction<ModalType>) {
      state.modalType = action.payload;
    },
  },
});

export const { handleShowModal, handleModalType } = modalSlice.actions;
export default modalSlice.reducer;
