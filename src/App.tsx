import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductDetailPage from "./module/product_page/presentation/ProductDetailPage";
import {routes} from "./general/navigation/routes";
import BlogArticlePage from "./module/article_page/presentation/BlogArticlePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProductDetailPage/>}/>
                <Route path={`/${routes.productDetail}`} element={<ProductDetailPage/>}/>
                <Route path={`/${routes.productDetail}/:productId`} element={<ProductDetailPage/>}/>

                <Route path="/" element={<BlogArticlePage/>}/>
                <Route path={`/${routes.articlePage}`} element={<BlogArticlePage/>}/>
                <Route path={`/${routes.articlePage}/:articleId`} element={<BlogArticlePage/>}/>

            </Routes>
        </>
    );
}

export default App;
