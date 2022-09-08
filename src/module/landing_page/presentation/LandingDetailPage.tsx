import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Product from "../domain/model/Product";
import {Store} from "../../../general/redux/storeTypes";
import {useParams} from "react-router-dom";
import {getProductDetailsAction} from "../redux/asyncActions";
import getProductDetails from "../domain/use_case/getProductDetails";

import Banner from "./Banner";
import Group12 from "./Group12";
import Pagionations from "./Pagionations";
import Subscribtion from "./Subscribtion";
import Footer from "./Footer";
import Blog from "./Blog";
import Categories from "./Categories";
import Navigation_Menu from "./Navigation_Menu";
import {products} from "../utils/constants";

const LandingDetailPage:React.FC = ()=> {
    const {productId} = useParams<string>()
    const product = useSelector<Store, Product>(
        state => state.productPage.product
    );
    const isLoading = useSelector<Store,boolean>(
        state => state.productPage.isLoading
    );
    const dispatch = useDispatch()
    useEffect(()=>{
        if(productId){
            dispatch(getProductDetailsAction(productId))
            getProductDetails(productId).then((data)=>{
                console.log(data);
            })
        }
    },[productId]);

    return (
        <div className="wrapper clear" >
            <Navigation_Menu/>
            <Banner/>
            <div className="content p-40">
                <div className="d-flex align-center mb-45 justify-between">
                    <h1>New arrivals</h1>
                </div>

                <div className="d-flex flex-wrap">
                    {products.map((obj)=>
                        <Group12
                            imageUrl={obj.imageUrl}
                            title={obj.title}
                            article={obj.article}
                            price={obj.price}
                            imageAddCart={obj.imgAddCart}
                            onClickAddCart={()=> console.log("Добавили закладки")}
                        />)}
                </div>

            </div>
            {/*<Group12/>*/}
            <Pagionations/>
            <Categories/>
            <Blog/>
            {/*<Subscribtion/>*/}
            <Footer/>
    </div>)
}
export default LandingDetailPage;