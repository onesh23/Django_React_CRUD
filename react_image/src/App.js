import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowProduct from './component/ShowProduct';
import AddProduct from './component/AddProduct';
import NavbarComp from './component/NavbarComp';
import ProductDetail from './component/ProductDetail';
import UpdateProduct from './component/UpdateProduct';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarComp />
          <Routes>
            <Route path='/' element={<ShowProduct />}  />
            <Route path='add' element={<AddProduct />}  />
            <Route path='/:id/' element={<ProductDetail />}  />
            <Route path='/:id/update' element={<UpdateProduct />}  />

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
