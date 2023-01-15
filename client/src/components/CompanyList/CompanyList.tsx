import { useEffect, useState } from 'react';
import { CompanyType } from '../../redux/companies/types';
import { handleModalType, handleShowModal } from '../../redux/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CompanyListItem from '../CompanyListItem';
import Search from '../Search';
import { Styled } from './CompanyList.styled';

const CompanyList = () => {
  const allCompanies = useAppSelector((state) => state.companies.allCompanies);
  const searchKey = useAppSelector((state) => state.companies.searchKey);
  const dispatch = useAppDispatch();

  const [filteredList, setFilteredList] = useState<CompanyType[]>([]);

  useEffect(() => {
    setFilteredList(
      allCompanies.filter((company) =>
        company.name.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  }, [allCompanies, searchKey]);

  const handleAddClick = () => {
    dispatch(handleShowModal());
    dispatch(handleModalType('addCompany'));
  };

  return (
    <Styled>
      <Search type={'company'} />
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
        {filteredList.map((company, index) => (
          <CompanyListItem key={index} company={company} />
        ))}
      </ul>
    </Styled>
  );
};

export default CompanyList;
