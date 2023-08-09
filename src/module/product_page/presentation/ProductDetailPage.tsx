import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Product from "../domain/model/Product";
import {Store} from "../../../general/redux/storeTypes";
import {useParams} from "react-router-dom";
import {getProductDetailsAction} from "../redux/asyncActions";
//import getProductDetails from "../domain/use_case/getProductDetails";
import styles from "./ProductPage.module.css";
import AlsoLike from "./AlsoLike";
import {addToCartAction} from "../../cart/redux/asyncActions";
import CartProduct from "../../cart/domain/model/CartProduct";
import {sizes} from "../../../general/data/sizes";
import useModal from "../modalWindow/useModal";
import Modal from "../modalWindow/modal";
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
        }
    }, [productId]);

    const calculateDiscountPersent = (price: number, discount: number): number => {
        if (price <= 0 || discount < 0 || discount >= 100) {
            return price;
        }
        const newPriceInUSD: number = + price;
        const discountInUSD: number = + discount;
        const fullPriceInUSD: number = (newPriceInUSD + discountInUSD);
        const discountPercentage: number = (discountInUSD / fullPriceInUSD) * 100;
        return (Math.round(discountPercentage));
    };
    const discountPercentage = calculateDiscountPersent(product.price, product.discount);
    const fullPrice = Number(product.price) + Number(product.discount);

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
        console.log("COLORING ID " + colorImg.id)
        setSelectedColor(colorImg.id);
        tempCartProduct.color = colorImg.id;
        console.log("TEM PR COLOR: " + tempCartProduct.color )
        // console.log("Cart Product color updated to: " + JSON.stringify(tempCartProduct))

    };

    let [tempCartProduct, setTempCartProduct] = useState<CartProduct>({
        idProduct: productId??"1111",
        product_thumb: "url to img",
        count: 1,
        color: selectedColor,
        size: selectedSizeOption,
        product_title: product.product_title,
        rating: product.rating,
        price: product.price,
        discount: product.discount,
    });


    let addToCart = () => {
        console.log("Set product done!: " + JSON.stringify(tempCartProduct))
        dispatch(addToCartAction(tempCartProduct)) //from cartPageReducer
            console.log(cartItems.length)
           console.log("cart ITEMS: " + JSON.stringify(cartItems))
    }

    return (
        <div>
            <div>
                <Modal isOpen={isOpen} toggle={toggle} imgSrc={imgSrc}>
                    <img src={imgSrc} alt="img"/>
                </Modal>
                <div className={styles.productPage}>
                    <div className={styles.photoBox}>
                        <img onClick={toggle} alt={"img_main"} src={product.product_thumb} key={Math.random()}/>
                        { product.product_imgs.map(el => {
                            return <img onClick={toggle} alt={"imgs"} src={el} key={Math.random()}/>;
                        })}

                    </div>

                    <div className={styles.productInfoBox}>
                        {discountPercentage > 0 ? (
                            <div className={styles.discount}>-{discountPercentage}%</div>
                        ) : null}
                        <div className={styles.title}>{product.product_title}</div>
                        <div className={styles.description}>{product.description}
                        </div>
                        <div className={styles.newPrice}>${product.price}</div>

                        {fullPrice !== Number(product.price) ? (
                            <div className={styles.oldPrice}>${fullPrice}</div>
                        ) : null}

                        <div className={styles.lineDeviderSmall}></div>

                        <div className={styles.productColorBox}>
                            <div className={styles.productColorText}>{selectedColor !== ""
                                ? `Color: "${tempCartProduct.color}"`
                                : product.colors[0]}</div>
                            <div className={styles.productColorImg}>
                                {product.colors.map((color, index) => (
                                    <img
                                        key={index}
                                        onClick={colorHandler}
                                        className={color === selectedColor ? styles.active : ""}
                                        src={require(`./images/Products/color/img${index + 1}.png`)}
                                        id={color}
                                        alt="color"
                                    />
                                ))}
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
                                <DropDownOut title={"Details"} text={product.details}/>
                                <div className={styles.lineDeviderSmall}></div>
                            </div>
                            <div>
                                <DropDownOut title={"Shipping & Return"} text={''}/>
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