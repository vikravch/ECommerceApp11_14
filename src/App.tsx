import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductDetailPage from "./module/product_page/presentation/ProductDetailPage";
import {routes} from "./general/navigation/routes";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<ProductDetailPage/>}/>
          <Route path={`/${routes.productDetail}`} element={<ProductDetailPage/>}/>
          <Route path={`/${routes.productDetail}/:productId`} element={<ProductDetailPage/>}/>

        </Routes>
      </>
  );
}

export default App;
