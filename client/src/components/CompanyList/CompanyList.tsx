import { handleModalType, handleShowModal } from '../../redux/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CompanyListItem from '../CompanyListItem';
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
          <CompanyListItem key={index} company={company} />
        ))}
      </ul>
    </Styled>
  );
};

export default CompanyList;
