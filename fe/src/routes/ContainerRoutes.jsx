import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Route,
  Routes,
  
} from "react-router-dom";
import axios from 'axios';

import Header from "../pages/Header";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import ThongTin from '../pages/ThongTin'
import Checkout from "../pages/Checkout";
import HomeAd from"../admin/HomeAd";
import OrderManagement from "../admin/OrderManagement";
import ProductManagement from "../admin/ProductManagement ";
import UserManagement from "../admin/UserManagement";
import AddUser from "../admin/addUser";
import EditUser from "../admin/EditUser";
import AddP from '../admin/AddProduct';
import EditP from '../admin/EditProduct';
import Thankyou from '../pages/Thankyou';
// import Thankyou from '../pages/thankyou';
import { useLocation } from 'react-router-dom';






const ContainerRoutes = () => {
  const location = useLocation();
  // const [cartItems, setCartItems] = useState([]); 
   const [authData, setAuthData] = useState(null); 


  // // Function to update cartItems state
  // const updateCartItems = (items) => {
  //   setCartItems(items);
  // };
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const authData = JSON.parse(localStorage.getItem('auth-data'));
        setAuthData(authData); // Lưu authData vào state khi được lấy từ localStorage
        
        const userId = authData?.id;
        if (!userId) {
          console.log('Người dùng chưa đăng nhập.');
          return;
        }
  
        const response = await axios.get(`http://localhost:8080/cart/getCartsByUserId`, {
          params: { userId: userId }
        });
        updateCartItems(response.data);
  
       // setCartItems(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm từ giỏ hàng:', error);
      }
    };
  
    fetchCartItems();
  }, []);

  const updateCartItems = (items) => {
    setCartItems(items);
  };

  useEffect(() => {

    const pathName = window.location.pathname.replace('/','');
    if(['login', 'register', 'forgotpassword'].includes(pathName) || window.location.pathname ==='/') return;

    try {
      const authData = localStorage.getItem("auth-data");
      /**
       * TH1: không có auth-data
       * TH2: auth-data không phải dạng obj -> sẽ parse bị lỗi
       * TH3: là dạng obj nhưng rỗng
       */
      if (!authData || !Object.keys(JSON.parse(authData)).length) {
        throw new Error("auth data error");
      }
      const ADMIN_PATHS = [
        "homeAd",
        "orderManagement",
        "productManagement",
        "userManagement",
        "addUser",
        "editUser",
        "addProduct",
        "editProduct",
      ];
      if (!ADMIN_PATHS.includes(pathName)) return;
      
      if(JSON.parse(authData)?.role === 1) throw new Error('not admin');

    } catch (error) {
      localStorage.removeItem("auth-data");
      window.location.replace("/login");
    }
  }, [location.pathname]);//chạu liên tục khi mà thay đổi đường link ui
  return (
    <>
      <Header cartItems={cartItems} /> {/* truyền cartItems làm prop cho Header */}
      <Routes>
        
        <Route path="login" element={<Login />} />
        <Route path="" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail authData={authData} updateCartItems={updateCartItems} />} />
        <Route
          path="cart"
          element={<Cart cartItems={cartItems} updateCartItems={updateCartItems} authData={authData} />} // Pass cartItems and updateCartItems as props to Cart
        />        <Route path="thongTin" element={<ThongTin />} />
        <Route path="checkout" element={<Checkout cartItems={cartItems}/>}/>
        <Route path='thankyou' element={<Thankyou/>}/>

        <Route path="homeAd" element={<HomeAd/>}/>
        <Route path="orderManagement" element={<OrderManagement/>}/>
        <Route path="productManagement" element={<ProductManagement/>}/>
        <Route path="userManagement" element={<UserManagement/>}/>
        <Route path="addUser" element={<AddUser/>}/>
        <Route path="/editUser/:userId" element={<EditUser/>}/>
        <Route path="addProduct" element={<AddP/>}/>
        <Route path="/editProduct/:id" element={<EditP/>}/>
        
        {/* <Route path ="thankyou" element={<Thankyou/>}/> */}


      </Routes>
    <Footer/>
    </>
  );
};

export default ContainerRoutes;
