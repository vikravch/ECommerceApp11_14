import React, {useEffect} from "react";
import PreviewProduct from "../../product_card/presentation/PreviewProduct";
import Pagination from "../../pagination/Pagination";
import {paginationData} from "../../pagination/data/fakeData";
import Skeleton from "../../category/presentation/Skeleton";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";
import {getArrivalDetailsAction, setNewArrivalsPaginationPage} from "../redux/asyncActions";
import styles from "../styles/newArrivals.module.css"


const NewArrivals: React.FC = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector<Store, number>(state => state.landingPage.currentPage)
    const newArrivals = useSelector<Store, Array<ProductPreviewInfo>>(state => state.landingPage.productsData.content)

    // @ts-ignore
    const currentPage = useSelector<Store, number>(state => state.landingPage.currentPage);
    const skeletons = [...new Array(12)].map((_, index) => <Skeleton key={index}/>);

    //todo compare current page and do dispatch if needed
    useEffect(() => {
        if (currentPage) {
            dispatch(getArrivalDetailsAction(currentPage));
        }
    }, [currentPage]);

    return (
        <>
            <div className={styles.container}>
            <h1 className={styles.h1}>New arrivals</h1>
            <div className={'col'}>
                <div className={'row row-cols-4 justify-content-center p-0 m-0'}>
                    {newArrivals.map((product, index) =>
                        <PreviewProduct
                            key={index}
                            id={index}
                            imageUrl={product.product_thumb}
                            title={product.product_title}
                            article={product.product_id}
                            price={Math.round(product.price)}
                            rating={product.rating}
                            discount={product.discount}
                        />
                    )}

                </div>
                <Pagination data={paginationData} currentPage={currentPage} setCurrentPage={
                    (page: number) => {
                        dispatch(setNewArrivalsPaginationPage(page))
                    }
                }/>
            </div>
            </div>
        </>
    )
}

export default NewArrivals;