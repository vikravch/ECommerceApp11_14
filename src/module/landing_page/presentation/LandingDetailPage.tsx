import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getProductDetailsAction} from "../redux/asyncActions";
import getProductDetails from "../domain/use_case/getProductDetails";
import Pagination from "../../pagination/Pagination";
import Banner from "./Banner";
import Subscribtion from "./Subscribtion";
import Footer from "./Footer";
import Blog from "./Blog";
import Categories from "./Categories";
import Navigation_Menu from "./Navigation_Menu";
import {products2} from "../utils/constants";
import {Store} from "../../../general/redux/storeTypes";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";
import PreviewProduct from "../../product_card/presentation/PreviewProduct";
import Skeleton from "../../category/presentation/Skeleton";
import {paginationData} from "../../pagination/data/fakeData";
import NewArrivals from "./NewArrivals";

const LandingDetailPage: React.FC = () => {
    return (
        <>
            <Banner/>
            <NewArrivals/>
            <h1>Categories</h1>
            <Categories/>
            <h1>Blog</h1>
            <Blog/>
            <Subscribtion/>
            <Footer/>
        </>)
}

export default LandingDetailPage;