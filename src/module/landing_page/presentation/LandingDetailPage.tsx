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
    // const [products, setProducts] = React.useState([]);
    // back-end
    // React.useEffect(() =>
    // {
    //     fetch("https://631ac033fae3df4dcfeb4d15.mockapi.io/products")
    //         .then((response) =>{
    //             return response.json();
    //         })
    //         .then((json) =>{
    //             setProducts(json);
    //         });
    // }, []);

// добавление в корзину
//     const [cartItems, setCartItems] = React.useState([]);
    const onAddToCart = (obj: any) =>
    {
       console.log(obj)
    }


    return (
        <div className="wrapper clear" >
            <Navigation_Menu/>
            <Banner/>
            <div className="content p-40">
                <div className="d-flex align-center mb-45 justify-between">
                    <h1>New arrivals</h1>
                </div>

                <div className="d-flex flex-wrap">
                    {products.map((product)=>
                        <Group12
                            imageUrl={product.imageUrl}
                            title={product.title}
                            article={product.article}
                            price={product.price}
                            imageAddCart={product.imgAddCart}
                            // onPlus={(obj)=> console.log(obj)}
                            onClickAddCart={()=> onAddToCart(product)}
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