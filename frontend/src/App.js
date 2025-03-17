import React from 'react'
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home, MyProducts,CreateProduct,Cart, ProductDetail, Profile, CreateAddress, SelectAddress, OrderConfirmation} from "./routes/routes";
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
        <Route path='/select-Address' element={<SelectAddress/>}/>
        <Route path='/Order-confirmation' element={<OrderConfirmation/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App