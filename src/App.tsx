import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductDetailPage from "./module/product_page/presentation/ProductDetailPage";
import {routes} from "./general/navigation/routes";
import LandingDetailPage from './module/landing_page/presentation/LandingDetailPage';


function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<ProductDetailPage/>}/>
          <Route path={`/${routes.productDetail}`} element={<ProductDetailPage/>}/>
          <Route path={`/${routes.productDetail}/:productId`} element={<ProductDetailPage/>}/>
            <Route path="/" element={<LandingDetailPage/>}/>
            <Route path={`/${routes.landingDetail}`} element={<LandingDetailPage/>}/>
            <Route path={`/${routes.landingDetail}/:productId`} element={<LandingDetailPage/>}/>

        </Routes>
      </>
  );
}

export default App;
