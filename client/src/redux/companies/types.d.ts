export type CompaniesStateType = {
  allCompanies: Array<CompanyType>;
  editCompany: CompanyType | undefined;
  searchKey: string;
};

export type CompanyType = {
  _id: string;
  name: string;
  phone: string;
  country: string;
  website: string;
  products: Array<string>;
};
