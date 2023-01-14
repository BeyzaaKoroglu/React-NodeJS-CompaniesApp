import { ChangeEvent, useEffect, useState } from 'react';
import { handleShowModal } from '../../redux/modal/modalSlice';
import {
  createCompany,
  getAllCompanies,
  updateCompany,
} from '../../redux/services/endpoints/companies';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { CompanyFormValues } from './CompanyForm.types';

const CompanyForm = () => {
  const modalType = useAppSelector((state) => state.modal.modalType);
  const allCompanies = useAppSelector((state) => state.companies.allCompanies);
  const editCompany = useAppSelector((state) => state.companies.editCompany);
  const dispatch = useAppDispatch();

  const [formValues, setFormValues] = useState<CompanyFormValues>({
    name: '',
    phone: '',
    country: '',
    website: '',
  });

  useEffect(() => {
    if (modalType === 'editCompany' && editCompany)
      setFormValues({
        _id: editCompany._id,
        name: editCompany.name,
        phone: editCompany.phone,
        country: editCompany.country,
        website: editCompany.website,
      });
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAddClick = () => {
    if (formValues.name === '' || formValues.website === '')
      alert(
        `${formValues.name === '' ? 'Company name is required\n' : ''}${
          formValues.website === '' ? 'Company website is required' : ''
        }`
      );
    else {
      if (allCompanies.find((company) => company.name === formValues.name))
        alert('The company already exists');
      else {
        dispatch(createCompany(formValues)).then(() =>
          dispatch(getAllCompanies())
        );
        dispatch(handleShowModal());
      }
    }
  };

  const handleEditClick = () => {
    if (formValues.name === '' || formValues.website === '')
      alert(
        `${formValues.name === '' ? 'Company name is required\n' : ''}${
          formValues.website === '' ? 'Company website is required' : ''
        }`
      );
    else {
      if (
        allCompanies.find((company) => company.name === formValues.name) &&
        formValues.name !== editCompany?.name
      )
        alert('The company already exists');
      else {
        editCompany &&
          dispatch(updateCompany(formValues)).then(() =>
            dispatch(getAllCompanies())
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
      {modalType === 'addCompany' ? (
        <h2>Add New Company</h2>
      ) : (
        <h2>Edit Company</h2>
      )}

      <input
        onChange={handleChange}
        name="name"
        value={formValues.name}
        placeholder="Company Name"
        type="Text"
      />
      <input
        onChange={handleChange}
        name="phone"
        value={formValues.phone}
        placeholder="Phone Number"
        type="Text"
      />
      {modalType === 'addCompany' && (
        <input
          onChange={handleChange}
          name="country"
          value={formValues.country}
          placeholder="Incorporation
        Country"
          type="Text"
        />
      )}
      <input
        onChange={handleChange}
        name="website"
        value={formValues.website}
        placeholder="Website"
        type="Text"
      />

      {modalType === 'addCompany' ? (
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

export default CompanyForm;
