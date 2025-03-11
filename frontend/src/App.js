import React from 'react'
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home, MyProducts,CreateProduct,Cart, ProductDetail, Profile, CreateAddress} from "./routes/routes";
// import CreateProduct from './pages/createProduct.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/create' element={<CreateProduct/>}/>
        <Route path='/myproducts' element={<MyProducts/>}/>
        <Route path='/create-product/:id' element={<CreateProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/productdetail' element={<ProductDetail/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/create-address' element={<CreateAddress/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App