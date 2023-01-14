import { FC } from 'react';
import { handleEditCompany } from '../../redux/companies/companiesSlice';
import { handleModalType, handleShowModal } from '../../redux/modal/modalSlice';
import {
  deleteCompany,
  getAllCompanies,
} from '../../redux/services/endpoints/companies';
import { useAppDispatch } from '../../redux/store';
import { Styled } from './CompanyListItem.styled';
import { CompanyListItemProps } from './CompanyListItem.types';

const CompanyListItem: FC<CompanyListItemProps> = ({ company }) => {
  const dispatch = useAppDispatch();

  const handleEditClick = () => {
    dispatch(handleShowModal());
    dispatch(handleEditCompany(company));
    dispatch(handleModalType('editCompany'));
  };

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure?'))
      dispatch(deleteCompany(company._id)).then(() => {
        dispatch(getAllCompanies());
      });
  };

  return (
    <Styled>
      <span>{company.name}</span>
      <span>{company.phone}</span>
      <span>{company.country}</span>
      <span>{company.website}</span>
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

export default CompanyListItem;
