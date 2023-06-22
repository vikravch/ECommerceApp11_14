import React from "react";
import PreviewProduct from "../../product_card/presentation/PreviewProduct";
import Pagination from "../../pagination/Pagination";
import {paginationData} from "../../pagination/data/fakeData";
import Skeleton from "../../category/presentation/Skeleton";
import {products2} from "../utils/constants";
import {useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";

const NewArrivals: React.FC = () => {
    const isLoading = false
    const currentPage = useSelector<Store, number>(state => state.landingPage.currentPage);
    const skeletons = [...new Array(12)].map((_, index) => <Skeleton key={index}/>);
    const fakeProductsData = products2
    return (
        <>
            <h1>New arrivals</h1>
            <div className={'col p-0 ps-5'}>
                <div className={'row row-cols-4 justify-content-center p-0 m-0'}>
                    {isLoading ? skeletons : fakeProductsData.map((product, productId) =>
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
                <Pagination data={paginationData} currentPage={currentPage} setCurrentPage={} />
                {/*{products.length === 0 ? null :<Pagination data={paginationData}/>}*/}
            </div>
        </>
    )
}

export default NewArrivals;