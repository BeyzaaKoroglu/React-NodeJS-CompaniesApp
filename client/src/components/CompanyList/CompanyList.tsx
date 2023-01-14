import { handleModalType, handleShowModal } from '../../redux/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Styled } from './CompanyList.styled';

const CompanyList = () => {
  const allCompanies = useAppSelector((state) => state.companies.allCompanies);
  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    dispatch(handleShowModal());
    dispatch(handleModalType('addCompany'));
  };

  return (
    <Styled>
      <ul>
        <li>
          <b>Name</b>
          <b>Number</b>
          <b>Country</b>
          <b>Website</b>
          <b></b>
          <b>
            <button className="addBtn" onClick={handleAddClick}>
              Add New Company
            </button>
          </b>
        </li>
        {allCompanies.map((company, index) => (
          <li key={index}>
            <span>{company.name}</span>
            <span>{company.phone}</span>
            <span>{company.country}</span>
            <span>{company.website}</span>
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

export default CompanyList;
