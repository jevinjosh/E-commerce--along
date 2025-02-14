import React from 'react'
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home, MyProducts} from "./routes/routes.js";
import CreateProduct from './pages/createProduct.jsx';

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
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App