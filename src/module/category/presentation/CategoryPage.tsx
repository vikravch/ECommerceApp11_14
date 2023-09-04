import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";
import {getProdustsByGender} from "../redux/asyncActions";
import Skeleton from "./Skeleton";
import Pagination from "../../pagination/Pagination";
import {convertToSpaceFormat} from "../../../general/common/tools";
import {PaginationData} from "../../../general/dto/APIResponseTypes";
import icon from "../icons/filter.png";
import SpinnerShort from "../../spinner/SpinnerShort";

type Params = {
    type: string;
}

const  CategoryPage:React.FC = () => {
    const isLoading = useSelector<Store, boolean>(state => state.categoryPage.isLoading);
    const currentPage = useSelector<Store, number>(state => state.categoryPage.currentPage);
    const products = useSelector<Store, Array<ProductPreviewInfo>>(state => state.categoryPage.data) ;
    const pageData = useSelector<Store, PaginationData>(state => state.categoryPage.pageData);
    const [isButtonFilterVisible, setIsButtonFilterVisible] = useState(false);
    const [isFullAccordionVisible, setIsFullAccordionVisible] = useState(true);
    const dispatch = useDispatch();
    let type = useParams<Params>().type || '';
    if(type){
        type = type[0].toUpperCase() + type.substring(1);
    }

    useEffect(() => {
        if (type) {
            dispatch(getProdustsByGender(type))
        }
    }, [type]);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 768) {
                setIsButtonFilterVisible(true);
            } else {
                setIsFullAccordionVisible(true);
                setIsButtonFilterVisible(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    });
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <>
        <div className={'container p-0 mainCont'}>
            <div className={'main'}>{convertToSpaceFormat(type)} / <span className={'black'}>All</span></div>
            <div className={"container marCategory mainCont"}>
                <div className={"row justify-content-between"}>
                    <h1 className={"col col-sm-7 p-0 category"}>{convertToSpaceFormat(type)}</h1>
                    <div className={`col col-sm-1 align-self-center text-end p-0 filterBtn 
                    ${isButtonFilterVisible ? '' : 'd-none'}`} onClick={() => setIsFullAccordionVisible(!isFullAccordionVisible)}>
                        <img src={icon} className={'pe-2'} alt={'filters'} title={'show filters'}/>
                    </div>
                    <div className={"col col-sm-2 align-self-center p-0 selectDiv"}>
                        <select className="form-select form-select-sm select"
                                onChange={()=>{console.log("dispatch me!");}}>
                            <option value="0">Sort by:</option>
                            <option value="rating">Rating</option>
                            <option value="newest">Newest</option>
                            <option value="high-low">By price: high</option>
                            <option value="low-high">By price: low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={`row row-cols-1 row-cols-md-2 m-0 
                ${isButtonFilterVisible ? ' justify-content-end' : ' justify-content-between'}`}>
                <div className={'col col-sm-1 p-0 nav-bar'} onChange={(e)=>{console.log(e.target);}}>
                    <div className={`accordion accordion-flush ${isFullAccordionVisible ? '' : 'd-none'}`}>
                        <Category isButtonFilterVisible={isButtonFilterVisible} gender={type}/>
                        <Price isButtonFilterVisible={isButtonFilterVisible}/>
                        <Size isButtonFilterVisible={isButtonFilterVisible}/>
                        <Collection isButtonFilterVisible={isButtonFilterVisible}/>
                        <Brand isButtonFilterVisible={isButtonFilterVisible}/>
                        <Style isButtonFilterVisible={isButtonFilterVisible}/>
                        <Season isButtonFilterVisible={isButtonFilterVisible}/>
                    </div>
                </div>
                <div className={'col col-sm-11 col-md-7 col-lg-8 col-xl-9 p-0'}>
                    <div className={'row row-cols-3 justify-content-center p-0 m-0'}>
                        {isLoading ? skeletons : products.map((product,index) =>
                            <PreviewProduct
                                key={index}
                                id={index}
                                imageUrl={product.product_thumb}
                                title={product.product_title}
                                article={product.product_id}
                                price={product.price}
                                rating={product.rating}
                                discountPercent={product.discountPercent}
                            />
                        )}
                    </div>

                    <Pagination data={pageData} currentPage={currentPage} setCurrentPage={
                        (page:number)=>{
                         //   dispatch(setCategoryPaginationPage(page))
                        }
                    } />
                </div>
            </div>
        </div>
        {isLoading ? <SpinnerShort/> : ''}
        </>
    );
};

export default CategoryPage;