import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import Product from "../domain/model/Product";
// import {Store} from "../../../general/redux/storeTypes";
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
import {Store} from "../../../general/redux/storeTypes";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";
import addCart from "../images/sumbol/bag_cart.svg";
import {addToCartAction} from "../../cart/redux/asyncActions";
import PreviewProduct from "../../category/presentation/PreviewProduct";
import Skeleton from "../../category/presentation/Skeleton";



const LandingDetailPage:React.FC = ()=> {
    const isLoading = useSelector<Store, boolean>(state => state.landingPage.isLoading);
    const {productId} = useParams<string>()
    // const product = useSelector<Store, Product>(
    //     state => state.productPage.product
    // );
    // const isLoading = useSelector<Store,boolean>(
    //     state => state.productPage.isLoading
    // );
    const products = useSelector<Store, Array<ProductPreviewInfo>>(state => state.landingPage.data);
    const dispatch = useDispatch()
    useEffect(()=>{
        if(productId){
            dispatch(getProductDetailsAction(productId))
            getProductDetails(productId).then((data)=>{
                console.log(data);
            })
        }
    },[productId]);

    const skeletons = [...new Array(12)].map((_, index) => <Skeleton key={index} />);
    // const [cartOpened, setCartOpened] = useState(false);

    // back-end
    // const [products, setProducts] = React.useState([]);

    // useEffect(() =>
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
//     const [cartProducts, setCartProducts] = useState([]);
    const onAddToCart = (obj: any) =>
    {
        console.log(obj)
        //todo AddtoCart action
        // setCartProducts(prev => [...prev, obj]);
    }
// Search
    const [searchValue, setSearchValue] = React.useState("");
    const onChangeSearchInput = (event: { target: { value: React.SetStateAction<string>; }; }) =>
    {
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }


    return (
        <div className="wrapper clear" >
            <Navigation_Menu/>
            <Banner/>
            <div className="content p-40">
                <h1>New arrivals</h1>
                {/*<div className="d-flex flex-wrap">*/}
                {/*    {products.map((product,productId) =>*/}
                {/*        <Group12*/}
                {/*            key={productId}*/}
                {/*            imageUrl="http://via.placeholder.com/365x300"*/}
                {/*            title={product.product_title}*/}
                {/*            article={product.idProduct}*/}
                {/*            price={Math.round(product.price)}*/}
                {/*            rating={product.rating}*/}
                {/*            imageAddCart={addCart}*/}
                {/*            onClickAddCart={()=> dispatch(addToCartAction({*/}
                {/*                count:1,*/}
                {/*                color:"Black",*/}
                {/*                size:"M",*/}
                {/*                idProduct: product.idProduct,*/}
                {/*                product_thumb: product.product_thumb,*/}
                {/*                product_title: product.product_title,*/}
                {/*                rating: product.rating,*/}
                {/*                price: Math.round(product.price),*/}
                {/*                discount: product.discount*/}
                {/*            }))}*/}
                {/*        />*/}
                {/*    )}*/}
                {/*</div>*/}

                <div className={'col p-0 ps-5'}>
                    <div className={'row row-cols-4 justify-content-center p-0 m-0'}>
                        {isLoading ? skeletons : products.map((product,productId) =>
                            <PreviewProduct
                                key={productId}
                                id={productId}
                                imageUrl={"http://via.placeholder.com/300x365"}
                                title={product.product_title}
                                article={product.idProduct}
                                price={Math.round(product.price)}
                                rating={product.rating}
                                discount={product.discount}/>
                        )}
                    </div>
                    {products.length === 0 ? null :<Pagionations/>}
                </div>

                {/*<div className="d-flex flex-wrap">*/}
                {/*    {products*/}
                {/*        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))*/}
                {/*        .map((product,productId)=>*/}
                {/*            //TODO to component will send Array of objects: ProductPreviewInfo*/}
                {/*            <Group12*/}
                {/*                key={productId}*/}
                {/*                imageUrl={product.imageUrl}*/}
                {/*                title={product.title}*/}
                {/*                article={product.article}*/}
                {/*                price={product.price}*/}
                {/*                rating={product.rating}*/}
                {/*                imageAddCart={product.imgAddCart}*/}
                {/*                onClickAddCart={()=> onAddToCart(product)}*/}
                {/*            />)}*/}
                {/*</div>*/}
                <Pagionations/>
                <h1>Categories</h1>
                <Categories/>
                <h1>Blog</h1>
                <Blog/>
            </div>
            <Subscribtion/>
            <Footer/>

        </div>)
}
export default LandingDetailPage;