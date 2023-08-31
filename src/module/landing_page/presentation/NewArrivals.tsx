import React, {useEffect} from "react";
import PreviewProduct from "../../product_card/presentation/PreviewProduct";
import Pagination from "../../pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";
import {getArrivalDetailsAction, setNewArrivalsPaginationPage} from "../redux/asyncActions";
import styles from "../styles/newArrivals.module.css"
import {PaginationData} from "../../../general/dto/APIResponseTypes";


const NewArrivals: React.FC = () => {
    const dispatch = useDispatch()
    // const isLoading = useSelector<Store, number>(state => state.landingPage.currentPage)
    const newArrivals = useSelector<Store, Array<ProductPreviewInfo>>(state => state.landingPage.productsData.content)
    const pageData = useSelector<Store, PaginationData>(state => state.landingPage.pageData);

    // @ts-ignore
    const currentPage = useSelector<Store, number>(state => state.landingPage.currentPage);
    // const skeletons = [...new Array(12)].map((_, index) => <Skeleton key={index}/>);

    useEffect(() => {
        if (currentPage >= 0) {
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
                            price={product.price}
                            rating={product.rating}
                            discountPercent={product.discountPercent}
                        />
                    )}

                </div>
                <Pagination data={pageData} currentPage={currentPage} setCurrentPage={
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