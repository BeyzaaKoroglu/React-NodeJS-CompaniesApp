import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CompanyType } from '../../redux/companies/types';
import { useAppSelector } from '../../redux/store';
import { Styled } from './CompanySummery.styled';

const CompanySummary = () => {
  const navigate = useNavigate();
  const allCompanies = useAppSelector((state) => state.companies.allCompanies);
  const [lastCompanies, setLastCompanies] = useState<CompanyType[]>([]);

  useEffect(() => {
    setLastCompanies(allCompanies.slice(0, 3));
  }, [allCompanies]);

  return (
    <Styled>
      <div>
        <h2>
          Last Added Companies
          <button onClick={() => navigate('/companies')} className="linkBtn">
            See more
          </button>
        </h2>
      </div>
      <div className="companies">
        {lastCompanies.map((company, index) => (
          <div key={index}>
            <h3>{company.name}</h3>
            <p>
              <b>Company Phone: </b>
              {company.phone}
            </p>
            <p>
              <b>Incorporation Country: </b>
              {company.country}
            </p>
            <p>
              <b>Website: </b>
              {company.website}
            </p>
          </div>
        ))}
      </div>
    </Styled>
  );
};

export default CompanySummary;
