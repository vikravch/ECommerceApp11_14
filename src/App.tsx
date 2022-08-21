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

function App() {
  return (
      <>
        <Routes>
          <Route path={`/${routes.productDetail}`} element={<ProductDetailPage/>}/>
          <Route path={`/${routes.productDetail}/:productId`} element={<ProductDetailPage/>}/>
          <Route path="/" element={<LandingDetailPage/>}/>
          <Route path={`/${routes.landingDetail}`} element={<LandingDetailPage/>}/>
          <Route path={`/${routes.landingDetail}/:productId`} element={<LandingDetailPage/>}/>
          <Route path={`/${routes.cart}`} element={<CartPage/>}/>
          <Route path={`/${routes.profile}`} element={<ProfilePage/>}/>
          <Route path={`/${routes.checkout}`} element={<CheckoutPage/>}/>
          <Route path={`/${routes.blogPage}`} element={<BlogPage/>}/>
          <Route path={`/${routes.articlePage}`} element={<BlogArticlePage/>}/>
          <Route path={`/${routes.articlePage}/:articleId`} element={<BlogArticlePage/>}/>
          <Route path={`/main/${routes.profile}/:profileUID`} element={<ProfilePage/>}/>
        </Routes>
      </>
    );
}

export default App;
