import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getProductDetailsAction} from "../redux/asyncActions";
import getProductDetails from "../domain/use_case/getProductDetails";
import Pagination from "../../test/pagination/Pagination";
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

const LandingDetailPage:React.FC = ()=> {
    const [currentPage, setCurrentPage] = useState(0)
    const isLoading = useSelector<Store, boolean>(state => state.landingPage.isLoading);
    const {productId} = useParams<string>()

    const fakeProductsData = products2
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
        setSearchValue(event.target.value);
    }

// fake Pagination data
    let paginationData = {
        "pageable": {
            "sort": {
                "empty": true,
                "unsorted": false,
                "sorted": true
            },
            "offset": 0,
            "pageNumber": 0,
            "pageSize": 9,
            "paged": true,
            "unpaged": false
        },
        "totalPages": 21,
    };


    return (
        <div className="wrapper clear" >
            <Navigation_Menu/>
            <Banner/>
            <div className="content p-40">
                <h1>New arrivals</h1>
                <div className={'col p-0 ps-5'}>
                    <div className={'row row-cols-4 justify-content-center p-0 m-0'}>
                        {isLoading ? skeletons : fakeProductsData.map((product,productId) =>
                            <PreviewProduct
                                key={productId}
                                id={productId}
                                imageUrl={product.product_thumb}
                                title={product.product_title}
                                article={product.idProduct}
                                price={Math.round(product.price)}
                                rating={product.rating}
                                discount={product.discount}
                                />

                        )}
                    </div>

                    {products.length === 0 ? null :<Pagination data={paginationData}/>}
                </div>
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