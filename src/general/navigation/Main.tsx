import React from 'react';
import {routes} from "./routes";
import {Route, Routes} from "react-router-dom";
import ProductDetailPage from "../../module/product_page/presentation/ProductDetailPage";
import CartPage from "../../module/cart/presentation/CartPage";
import CheckoutPage from "../../module/checkout/presentation/CheckoutPage";


const Main = () => {
    return <Routes>
        <Route path="/" element={<ProductDetailPage/>}/>
        <Route path={`/${routes.productDetail}`} element={<ProductDetailPage/>}/>
        <Route path={`/${routes.cart}`} element={<CartPage/>}/>
        <Route path={`/${routes.checkout}`} element={<CheckoutPage/>}/>

    </Routes>
};

export default Main;