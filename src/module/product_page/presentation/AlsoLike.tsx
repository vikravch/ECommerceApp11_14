import React from 'react';
import styles from "./AlsoLike.module.css";
import PreviewProduct from "../../product_card/presentation/PreviewProduct";
import {useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import {useParams} from "react-router-dom";
import Product from "../domain/model/Product";
import Skeleton from "../../category/presentation/Skeleton";
import {products2} from "../../landing_page/utils/constants";
import Pagination from "../../pagination/Pagination";
import {paginationData} from "../../pagination/data/fakeData";


const AlsoLike = () => {
    const isLoading = useSelector<Store, boolean>(
        state => state.productPage.isLoading
    );

    const fakeProductsData = products2
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

    return (<div >
        <h4 className={styles.header}>You might also like</h4>
        <div>
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
                {fakeProductsData.length === 0 ? null :<Pagination data={paginationData}/>}
            </div>
            </div>

    </div>)
};

export default AlsoLike;