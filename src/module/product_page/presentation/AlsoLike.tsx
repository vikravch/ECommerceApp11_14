import React, {useEffect} from 'react';
import styles from "./AlsoLike.module.css";
import PreviewProduct from "../../product_card/presentation/PreviewProduct";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import Skeleton from "../../category/presentation/Skeleton";
import Pagination from "../../pagination/Pagination";
import {getAlsoLikeDetailsAction, setAlsoLikePage} from "../redux/asyncActions";
import ProductPreviewInfo from "../domain/model/ProductPreviewInfo";
import {PaginationData} from "../../../general/dto/APIResponseTypes";


const AlsoLike = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector<Store, boolean>(
        state => state.productPage.isLoading
    );
    const alsoLikeData = useSelector<Store, Array<ProductPreviewInfo>>(state => state.productPage.alsoLikeData.content)
    const pageData = useSelector<Store, PaginationData>(state => state.productPage.alsoLikePageData);
    const currentPage = useSelector<Store, number>(state => state.productPage.currentPage);
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

    useEffect(() => {
        if (currentPage >= 0) {
            dispatch(getAlsoLikeDetailsAction(currentPage));
        }
    }, [currentPage]);

    return (<div >
        <h4 className={styles.header}>You might also like</h4>
        <div>
            <div className={'col p-0 ps-5'}>
                <div className={'row row-cols-4 justify-content-center p-0 m-0'}>
                    {isLoading ? skeletons : alsoLikeData.slice(0, 4).map((product,productId) =>
                        <PreviewProduct
                            key={productId}
                            id={productId}
                            imageUrl={product.product_thumb}
                            title={product.product_title}
                            article={product.product_id}
                            price={product.price}
                            rating={product.rating}
                            discount={product.discount}
                        />
                    )}
                </div>
                <Pagination data={pageData} currentPage={currentPage} setCurrentPage={
                    (page:number)=>{
                        dispatch(setAlsoLikePage(page))
                    }
                } />
            </div>
            </div>

    </div>)
};

export default AlsoLike;