import React from 'react';
import styles from "./AlsoLike.module.css";
import typography from "./styles/typography.module.css";
import PreviewProduct from "../../product_card/presentation/PreviewProduct";
import Pagionations from "../../landing_page/presentation/Pagionations";
import {useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import {useParams} from "react-router-dom";
import Product from "../domain/model/Product";
import Skeleton from "../../category/presentation/Skeleton";
import {products2} from "../../landing_page/utils/constants";


const AlsoLike = () => {

    const {productId} = useParams<string>()
    const product = useSelector<Store, Product>(
        state => state.productPage.product
    );

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
                {/*{products.length === 0 ? null :<Pagionations/>}*/}
                <Pagionations/>
            </div>
            </div>
        <div>
            {/*<div className={styles.photoBox}>*/}
            {/*    <div className={styles.productSmallCard}>*/}
            {/*        <img src={require ("../../preview_product_panel/presentation/images/Image44-4.jpg")} alt="t-shirt"/>*/}
            {/*        <div className={styles.rateBox}>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*        </div>*/}
            {/*        <div className={styles.productInfo}>*/}
            {/*            <div>#7142</div>*/}
            {/*            <div>Basic t-shirt</div>*/}
            {/*            <div className={styles.productPrice}>$35</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    <div className={styles.productSmallCard}>*/}
            {/*        <img src={require ("../../preview_product_panel/presentation/images/Image44-1.jpg")} alt="t-shirt"/>*/}
            {/*        <div className={styles.rateBox}>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*        </div>*/}
            {/*        <div className={styles.productInfo}>*/}
            {/*            <div>#7142</div>*/}
            {/*            <div>Basic t-shirt</div>*/}
            {/*            <div className={styles.productPrice}>$35</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.productSmallCard}>*/}
            {/*        <img src={require ("../../preview_product_panel/presentation/images/Image44-2.jpg")} alt="t-shirt"/>*/}
            {/*        <div className={styles.rateBox}>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*        </div>*/}
            {/*        <div className={styles.productInfo}>*/}
            {/*            <div>#7142</div>*/}
            {/*            <div>Basic t-shirt</div>*/}
            {/*            <div className={styles.productPrice}>$35</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.productSmallCard}>*/}
            {/*        <img src={require ("../../preview_product_panel/presentation/images/Image44-3.jpg")} alt="t-shirt"/>*/}
            {/*        <div className={styles.rateBox}>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*            <img src={require ("../../preview_product_panel/presentation/images/Unionstar-1.png")} alt="star"/>*/}
            {/*        </div>*/}
            {/*        <div className={styles.productInfo}>*/}
            {/*            <div>#7142</div>*/}
            {/*            <div>Basic t-shirt</div>*/}
            {/*            <div className={styles.productPrice}>$35</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>

    </div>)
};

export default AlsoLike;