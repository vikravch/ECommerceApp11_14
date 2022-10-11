import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductDetailPage from "./module/product_page/presentation/ProductDetailPage";
import {routes} from "./general/navigation/routes";
import BlogArticlePage from "./module/article_page/presentation/BlogArticlePage";
import LandingDetailPage from './module/landing_page/presentation/LandingDetailPage';
import ProfilePage from "./module/profile/presentation/ProfilePage";
import CartPage from "./module/cart/presentation/CartPage";
import CheckoutPage from "./module/checkout/presentation/CheckoutPage";
import BlogPage from './module/blog_page/presentation/BlogPage';
import Header from "./module/header/presentation/Header";
import Footer from "./module/landing_page/presentation/Footer";
//import TestPage from "./module/test/TestPage";
import CategoryPage from "./module/category/presentation/CategoryPage";
import Category from "./module/category/presentation/Category";
import SignIn from "./module/login/presentation/SignIn";
import SignUp from "./module/login/presentation/SignUp";
import RestorePass from "./module/login/presentation/RestorePass";

function App() {
  //TODO fix header style on main page
  //sessionStorage.setItem("token", "123");

  return (
      // <div className="container-xl">
      <div>
          {
            window.location.pathname !== '/' &&
              <Header isDark={window.location.pathname === '/'}/>
          }

        <Routes>
          <Route path="/" element={<LandingDetailPage/>}/>
          <Route path={`/${routes.productDetail}`} element={<ProductDetailPage/>}/>
          <Route path={`/${routes.productDetail}/:productId`} element={<ProductDetailPage/>}/>
          <Route path={`/${routes.landingDetail}`} element={<LandingDetailPage/>}/>
          <Route path={`/${routes.landingDetail}/:productId`} element={<LandingDetailPage/>}/>
          <Route path={`/${routes.cart}`} element={<CartPage/>}/>
          <Route path={`/${routes.profile}`} element={<ProfilePage/>}/>
          <Route path={`/${routes.checkout}`} element={<CheckoutPage/>}/>
          <Route path={`/${routes.blogPage}`} element={<BlogPage/>}/>
          <Route path={`/${routes.articlePage}`} element={<BlogArticlePage/>}/>
          <Route path={`/${routes.articlePage}/:articleId`} element={<BlogArticlePage/>}/>
          <Route path={`/${routes.profile}`} element={<ProfilePage/>}/>
          <Route path={`/${routes.login}`} element={<SignIn/>}/>
          <Route path={`/${routes.register}`} element={<SignUp/>}/>
          <Route path={`/${routes.recovery}`} element={<RestorePass/>}/>
          <Route path={`/${routes.catalog}`} element={<CategoryPage/>}/>
          <Route path={`/${routes.catalog}/:type`} element={<CategoryPage/>}/>
          <Route path={`/:category`} element={<Category/>}/>
          {/*<Route path="/test" element={<TestPage/>}/>*/}
        </Routes>
        {window.location.pathname !== '/' && <Footer />}
      </div>
    );
}

export default App;
