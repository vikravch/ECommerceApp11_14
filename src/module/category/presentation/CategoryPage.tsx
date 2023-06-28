import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import './categoryStyle.css';
import PreviewProduct from "../../product_card/presentation/PreviewProduct";
import Category from "./navBarComponents/Category";
import Price from "./navBarComponents/Price";
import Size from "./navBarComponents/Size";
import Collection from "./navBarComponents/Collection";
import Brand from "./navBarComponents/Brand";
import Style from "./navBarComponents/Style";
import Season from "./navBarComponents/Season";
import Pagionations from "../../landing_page/presentation/Pagionations";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";
import {getProdustsByCategory} from "../redux/asyncActions";
import Skeleton from "./Skeleton";
import {Breadcrumbs} from "../../breadcrumbs";
import Pagination from "../../pagination/Pagination";
import {paginationData} from "../../pagination/data/fakeData";

type Params = {
    type: string;
}

//TODO you may also like <AlsoLike/>

const  CategoryPage:React.FC = () => {
    const isLoading = useSelector<Store, boolean>(state => state.categoryPage.isLoading);
    const products = useSelector<Store, Array<ProductPreviewInfo>>(state => state.categoryPage.data);
    const dispatch = useDispatch();
    let type = useParams<Params>().type || '';
    if(type){
        type = type[0].toUpperCase() + type.substring(1);
    }

    useEffect(() => {
        if (type) {
            dispatch(getProdustsByCategory(type))
        }
    }, [type]);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
    return (
        <div className={'container p-0'}>
            <Breadcrumbs/>
            <div className={'main'}>{type} / <span className={'black'}>All</span></div>
            <div className={"container marCategory"}>
                <div className={"row justify-content-between"}>
                    <h1 className={"col-7 p-0 category"}>{type}</h1>
                    <div className={"col-2 align-self-center p-0 selectDiv"}>
                        <select className="form-select form-select-sm select"
                                onChange={(e)=>{console.log("dispatch me!");}}>
                            <option value="0">Sort by:</option>
                            <option value="rating">Rating</option>
                            <option value="newest">Newest</option>
                            <option value="high-low">By price: high</option>
                            <option value="low-high">By price: low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={'row justify-content-between m-0'}>
                <div className={'col-1 p-0 nav-bar'} onChange={(e)=>{console.log(e.target);}}>
                    <div className="accordion accordion-flush">
                        <Category gender={type}/>
                        <Price/>
                        <Size/>
                        <Collection/>
                        <Brand/>
                        <Style/>
                        <Season/>
                    </div>
                </div>
                <div className={'col p-0 ps-5'}>
                    <div className={'row row-cols-3 justify-content-center p-0 m-0'}>
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
                    <Pagination data={paginationData} currentPage={0} setCurrentPage={()=>{}}/>
                    {products.length === 0 ? null :<Pagionations/>}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;