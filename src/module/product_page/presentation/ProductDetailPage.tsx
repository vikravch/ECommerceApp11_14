import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Product from "../domain/model/Product";
import {Store} from "../../../general/redux/storeTypes";
import {useParams} from "react-router-dom";
import {
    addToChartActionTest,
    getProductDetailsAction,
    setCartProductAction,
    setProductDataAction
} from "../redux/asyncActions";
import getProductDetails from "../domain/use_case/getProductDetails";
import {inspect} from "util";
import styles from "./ProductPage.module.css";
import AlsoLike from "../../preview_product_panel/presentation/AlsoLike";
import {addToCartAction, removeFromCartAction} from "../../cart/redux/asyncActions";
import CartProduct from "../../cart/domain/model/CartProduct";
import {sizes} from "../../../general/data/sizes";
import {CartPageStore} from "../../cart/redux/typesCartPage";
import useModal from "../modalWindow/useModal";
import Modal from "../modalWindow/modal";
import store from "../../../general/redux/store";
import {tempProductData} from "../data/tempData";
import DropDownOut from "../dropdown/DropDownOut";

const ProductDetailPage: React.FC = () => {
    const {productId} = useParams<string>()
    const product = useSelector<Store, Product>(
        state => state.productPage.product
    );
    const isLoading = useSelector<Store, boolean>(
        state => state.productPage.isLoading
    );
    const cartItems = useSelector<Store, Array<CartProduct>> (
        state => state.cartPage.cartItems
    )
    const { isOpen, toggle, imgSrc } = useModal();

    const dispatch = useDispatch()
    useEffect(() => {
        if (productId) {
            dispatch(getProductDetailsAction(productId));
            getProductDetails(productId).then((data)=>{
            })
        }
    }, [productId]);



    const [selectedSizeOption, setSelectedSizeOption] = useState<string>("S");

    const selectSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        const value = event.target.value;
        tempCartProduct.size = value;
        console.log("TEM PR SIZE: " + tempCartProduct.size )
        // setSelectedSizeOption(value);
        tempCartProduct.size = value;
    };


    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    const colorHandler = (event: React.MouseEvent<HTMLImageElement>) => {
        const colorImg: HTMLImageElement = event.currentTarget;
        console.log("COLORIMG ID " + colorImg.id)
        // setSelectedColor(colorImg.id);
        tempCartProduct.color = colorImg.id;
        console.log("TEM PR COLOR: " + tempCartProduct.color )
        // console.log("Cart Product color updated to: " + JSON.stringify(tempCartProduct))

    };

    let [tempCartProduct, setTempCartProduct] = useState<CartProduct>({
        idProduct: productId??"1111",
        product_thumb: "url fo img",
        count: 1,
        color: selectedColor,
        size: selectedSizeOption,
        product_title: product.product_title,
        rating: product.rating,
        price: product.price,
        discount: product.discount,
    });


    let addToCart = () => {
        // setTempCartProduct({ count: 1,
        //  color: selectedColor,
        //     size: selectedSizeOption,
        //     idProduct: productId??"1111",
        //     product_thumb: "",
        //     product_title: product.product_title,
        //     rating: product.rating,
        //     price: product.price,
        //     discount: product.discount,})

        console.log("Set product done!: " + JSON.stringify(tempCartProduct))
        dispatch(addToCartAction(tempCartProduct)) //from cartPageReducer
            console.log(cartItems.length)
            // cartItems.push(tempCartProduct) // пушает второй экземпляр

            console.log(cartItems.length)
            console.log("cart ITEMS: " + JSON.stringify(cartItems))

    }

    function dropDownDetails() {
        console.log("Drop down CLICKED")
    }

    return (
        <div>
            <div>
                <Modal isOpen={isOpen} toggle={toggle} imgSrc={''}>
                    <img src={imgSrc} alt="img"/>
                </Modal>
                <div className={styles.breadcrums}>Men / T-Shirt / Basic T-shirt </div>
                <div className={styles.productPage}>
                    <div className={styles.photoBox}>
                        { product.product_imgs.map(el => {
                            return <img onClick={toggle} alt={"imgs"} src={el} key={Math.random()}/>;
                        })}

                    </div>

                    <div className={styles.productInfoBox}>
                        <div className={styles.discount}>-{product.discount}%</div>
                        <div className={styles.title}>{product.product_title}</div>
                        <div className={styles.description}>The T-Shirt sets you up with soft cotton jersey and a
                            classic logo with camo on the chest.
                        </div>
                        <div className={styles.newPrice}>${product.price}</div>
                        <div className={styles.price}>$55</div>

                        <div className={styles.lineDeviderSmall}></div>

                        //TODO fix in color title
                        <div className={styles.productColorBox}>
                            <div className={styles.productColorText}>{selectedColor !== ""
                                ? `Color: "${selectedColor}"`
                                : product.colors[0]}</div>
                            <div className={styles.productColorImg}>
                                <img onClick={colorHandler} className={styles.active} src={require("./images/Products/color/img1.png")}
                                     alt="color" id={product.colors[0]}/>
                                <img onClick={colorHandler} src={require("./images/Products/color/img2.png")} id={product.colors[1]} alt="color"/>
                                <img onClick={colorHandler} src={require("./images/Products/color/img3.png")} id={product.colors[2]} alt="color"/>
                                <img onClick={colorHandler} src={require("./images/Products/color/img4.png")} id={product.colors[3]} alt="color"/>
                            </div>
                        </div>


                        <div className={styles.productSizeBox2}>
                            Choose size
                            <a href="#">Size guide</a>
                            <div className={styles.sizes}>
                        <select onChange={selectSizeChange} className="form-select">
                            <option className={styles.productSize} value={sizes.S}>{sizes.S}</option>
                            <option className={styles.productSize} defaultValue={sizes.M}>{sizes.M}</option>
                            <option className={styles.productSize} value={sizes.L}>{sizes.L}</option>
                        </select>
                            </div>
                            </div>

                        <button className={styles.addBtn}
                                onClick={addToCart}>Add to cart</button>
                        <div className={styles.lineDeviderSmall}></div>

                        <div className={styles.aditionalInfo}>
                            <div>
                                <DropDownOut title={"Details"}/>
                                <div className={styles.lineDeviderSmall}></div>
                            </div>
                            <div>
                                <DropDownOut title={"Shipping & Return"}/>
                                <div className={styles.lineDeviderSmall}></div>
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