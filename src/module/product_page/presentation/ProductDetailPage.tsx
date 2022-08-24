import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Product from "../domain/model/Product";
import {Store} from "../../../general/redux/storeTypes";
import {useParams} from "react-router-dom";
import {addToChartActionCreator, getProductDetailsAction} from "../redux/asyncActions";
import getProductDetails from "../domain/use_case/getProductDetails";
import {inspect} from "util";
import styles from "./ProductPage.module.css";
import AlsoLike from "../../preview_product_panel/presentation/AlsoLike";
import {ADD_TO_CART, addToCartAction, removeFromCartAction} from "../../cart/redux/asyncActions";
import CartProduct from "../../cart/domain/model/CartProduct";
import {sizes} from "../../../general/data/sizes";

const ProductDetailPage: React.FC = () => {
    const {productId} = useParams<string>()
    const product = useSelector<Store, Product>(
        state => state.productPage.product
    );
    const isLoading = useSelector<Store, boolean>(
        state => state.productPage.isLoading
    );
    const dispatch = useDispatch()
    useEffect(() => {
        if (productId) {
            dispatch(getProductDetailsAction(productId))
            /*getProductDetails(productId).then((data)=>{
                console.log(data);
            })*/
        }
    }, [productId]);

    let addToCart = () => {
        {
            //TODO colors and sizes to page for choice
            let dataToCart = new CartProduct(1, "Black",
                sizes.M, product.idProduct, product.product_main_img,
                product.product_title, product.rating,
                product.price, product.discount )
            //use ADD_TO_CART from cartPageReducer

            // при переходе на страницу продукта пишем в стейт - productId
            // при клике на цвет пишем в стейт - product color
            // при клике на цвет пишем в стейт - product size
            // при клике на addToChart - отправляем инфо в "корзину"
            console.log("Add_to_Chart Button Clicked")
            console.log("ID: " + JSON.stringify(dataToCart.idProduct))
            // store.addToChart(productDetailsToChart)
            // store.dispatch(addToChartActionCreator())
        }
    }


    function dropDownDetails() {
        console.log("Drop down CLICKED")
    }

    return (
        <div>
            <div>

                <div className={styles.breadcrums}>Breadcrums/ bread/ crums</div>
                <div className={styles.productPage}>
                    <div className={styles.photoBox}>
                        <img src={require("./images/Products/bigImg/img_1111.jpg")} alt="t-shirt"/>
                        <img src={require("./images/Products/bigImg/img_1121.jpg")} alt="t-shirt"/>
                        <img src={require("./images/Products/bigImg/img_1131.jpg")} alt="t-shirt"/>
                        <img src={require("./images/Products/bigImg/img_1141.jpg")} alt="t-shirt"/>
                    </div>

                    <div className={styles.productInfoBox}>
                        <div className={styles.discount}>-45%</div>
                        <div className={styles.title}>Title</div>
                        <div className={styles.description}>The T-Shirt sets you up with soft cotton jersey and a
                            classic logo with camo on the chest.
                        </div>
                        <div className={styles.newPrice}>$35</div>
                        <div className={styles.price}>$55</div>

                        <div className={styles.lineDeviderSmall}></div>

                        <div className={styles.productColorBox}>
                            <div className={styles.productColorText}>color:Black</div>
                            <div className={styles.productColorImg}>
                                <img className={styles.active} src={require("./images/Products/color/img1.png")}
                                     alt="color"/>
                                <img src={require("./images/Products/color/img2.png")} alt="color"/>
                                <img src={require("./images/Products/color/img3.png")} alt="color"/>
                                <img src={require("./images/Products/color/img4.png")} alt="color"/>
                            </div>
                        </div>

                        <div className={styles.productSizeBox}>Choose size
                            <div className={styles.productSize}>L / 14 US</div>
                        </div>


                        <button className={styles.addBtn}     onClick={addToCart}>Add to cart</button>
                        <div className={styles.lineDeviderSmall}></div>

                        <div className={styles.aditionalInfo}>

                            {/*// ---- DROP DAWN*/}
                            <div>
                                <div  className={styles.dropdown} onClick={dropDownDetails}>Details</div>
                                <div className={styles.dropdownContent}>
                                    <p className={styles.show}>Some text area. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis distinctio impedit.</p>
                                </div>
                            </div>
                            <div className={styles.shippingDropdown}>
                                <div>Shipping & Returns</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.lineDevider}></div>
            </div>
            <AlsoLike/>
        </div>

    );
}
export default ProductDetailPage;