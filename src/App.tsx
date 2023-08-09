import React from 'react';
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import ProductDetailPage from "./module/product_page/presentation/ProductDetailPage";
import {routes} from "./general/navigation/routes";
import BlogArticlePage from "./module/article_page/presentation/BlogArticlePage";
import LandingDetailPage from './module/landing_page/presentation/LandingDetailPage';
import ProfilePage from "./module/profile/presentation/firstLayer/ProfilePage";
import CartPage from "./module/cart/presentation/CartPage";
import CheckoutPage from "./module/checkout/presentation/CheckoutPage";
import BlogPage from './module/blog_page/presentation/BlogPage';
import Header from "./module/header/presentation/Header";
import Footer from "./module/landing_page/presentation/Footer";
//import TestPage from "./module/test/TestPage";
import CategoryPage from "./module/category/presentation/CategoryPage";
import SignIn from "./module/login/presentation/SignIn";
import SignUp from "./module/login/presentation/SignUp";
import RestorePass from "./module/login/presentation/RestorePass";
import PrivacyPolicy from "./module/login/presentation/PrivacyPolicy";
import TermsOfUse from "./module/login/presentation/TermsOfUse";
import CollectionPage from "./module/collections/presentation/CollectionPage";

function App() {
  //sessionStorage.setItem("token", "123"); // h32-0 // p 14
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
      <div>
        {isHomePage ? <Header isDark={true}/> : <Header isDark={false}/> }

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

          <Route path={`/${routes.catalog}/collection`} element={<CollectionPage/>}/>

          <Route path={`/${routes.agreement}/privacyPolicy`} element={<PrivacyPolicy/>}/>
          <Route path={`/${routes.agreement}/termsOfUse`} element={<TermsOfUse/>}/>
        </Routes>
        {window.location.pathname !== '/' && <Footer/>}
      </div>
    );
}

export default App;
