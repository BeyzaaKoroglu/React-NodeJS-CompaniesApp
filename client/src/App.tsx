import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import CompaniesPage from './pages/CompaniesPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import { getAllCompanies } from './redux/services/endpoints/companies';
import { getAllProducts } from './redux/services/endpoints/products';
import { useAppDispatch, useAppSelector } from './redux/store';

function App() {
  const showModal = useAppSelector((state) => state.modal.showModal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
      {showModal && <Modal />}
    </div>
  );
}

export default App;
