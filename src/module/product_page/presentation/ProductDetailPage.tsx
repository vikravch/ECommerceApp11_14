import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import {Link, useParams} from "react-router-dom";
import {getProductDetailsAction} from "../redux/asyncActions";
import styles from "./ProductPage.module.css";
import AlsoLike from "./AlsoLike";
import {addToCartAction} from "../../cart/redux/asyncActions";
import useModal from "../modalWindow/useModal";
import Modal from "../modalWindow/modal";
import DropDownOut from "../dropdown/DropDownOut";
import Product from "../domain/model/Product"
import {convertDiscountToPercent} from "../../../general/common/tools";
import CartProduct from "../../cart/domain/model/CartProduct";
import Spinner from "../../spinner/Spinner";

const ProductDetailPage: React.FC = () => {
    const {productId} = useParams<string>()
    const product = useSelector<Store, Product>(state => state.productPage.product);
    const isLoading = useSelector<Store, boolean>(state => state.productPage.isLoading);
    // const cartItems = useSelector<Store, Array<CartProduct>> (state => state.cartPage.cartItems)
    const { isOpen, toggle, imgSrc } = useModal();
    const [selectedSizeOption, setSelectedSizeOption] = useState('');
    // const [selectedColor, setSelectedColor] = useState('');
    const dispatch = useDispatch()

    let [discountPercentage, fullPrice] = ['', ''];
    if(+product.discount > 0) {
        discountPercentage = convertDiscountToPercent(+product.price, +product.discount).toString();
        fullPrice = (Number(product.price) + Number(product.discount)).toFixed(2);
    }
    const clientType = !(product.client_type !== null && product.client_type.length > 0) ? ''
        : product.client_type.at(0) + product.client_type.substring(1).toLowerCase();
    const sizeGuide =
        product.client_type === "KIDS" ? 'https://i.imgur.com/AK6gxSm.png' :
            product.category === "Shoes" ? 'https://i.imgur.com/O1n38LT.jpg' : 'https://i.imgur.com/vOgObOL.jpg';

    let tempCartProduct: CartProduct = {
        product_id: product.product_id,
        product_thumb: product.product_thumb,
        count: 1,
        color: product.colors[0].color,
        size: '',
        product_title: product.product_title,
        stock_sizes: product.size,
        price: Number(product.price),
        discount: Number(product.discount),
    }

    useEffect(() => {
        if (productId) {
            dispatch(getProductDetailsAction(productId));
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add(styles.lockScroll);
        } else {
            document.body.classList.remove(styles.lockScroll);
        }
    }, [isOpen]);

    let addToCart = () => {
        tempCartProduct.size = selectedSizeOption ? selectedSizeOption : product.size[0];
        console.log('before product.size[0] ' + product.size[0])
        console.log('before tempCartProduct.size ' + tempCartProduct.size)
        dispatch(addToCartAction(tempCartProduct))
        console.log('after tempCartProduct.size ' + tempCartProduct.size)
        console.log('after product.size[0] ' + product.size[0])
    }

    // const calculateDiscountPersent = (price: number, discount: number): number => {
    //     if (price <= 0 || discount < 0 || discount >= 100) {
    //         return price;
    //     }
    //     const newPriceInUSD: number = + price;
    //     const discountInUSD: number = + discount;
    //     const fullPriceInUSD: number = (newPriceInUSD + discountInUSD);
    //     const discountPercentage: number = (discountInUSD / fullPriceInUSD) * 100;
    //     return (Math.round(discountPercentage));
    // };

    // const selectSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     event.preventDefault();
    //     const value = event.target.value;
    //     // tempCartProduct.size = value;
    //     console.log("TEM PR SIZE: " + tempCartProduct.size )
    //     setSelectedSizeOption(value);
    //     console.log("after TEM PR SIZE: " + tempCartProduct.size )
    //     // tempCartProduct.size = value;
    //
    // };
    // const colorHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    //     const colorImg: HTMLImageElement = event.currentTarget;
    //     console.log("COLORING ID " + colorImg.id)
    //     setSelectedColor(colorImg.id);
    //     tempCartProduct.color = colorImg.id;
    //     console.log("TEM PR COLOR: " + tempCartProduct.color )
    //     // console.log("Cart Product color updated to: " + JSON.stringify(tempCartProduct))
    // };

    return (
        <>
            {isLoading ? <Spinner/> :
        <div style={{minWidth: 320}}>
            <Modal isOpen={isOpen} toggle={toggle} imgSrc={imgSrc}>
                <img src={imgSrc} alt="img"/>
            </Modal>
            <div className={'container p-0'}>
                <p className={styles.main}>
                    <Link to={'/catalog/men'} className={styles.main}>{clientType}
                    </Link> / <Link to={'/catalog/men'} className={styles.main}>{product.category}
                    </Link> / <span className={'black'}>{product.product_title}</span>
                </p>
                <div className={styles.productPage}>
                    <div className={styles.photoBox}>
                        <img className={styles.mainImg} onClick={toggle} alt={"img_main"} src={product.product_thumb} key={Math.random()}/>
                        { product.product_imgs.map(el => {
                            return <img className={styles.productAdditionalImgs} onClick={toggle} alt={"imgs"} src={el} key={Math.random()}/>;
                        })}
                    </div>

                    <div className={styles.productInfoBox}>
                        {discountPercentage ? (
                            <div className={styles.discount}>-{discountPercentage}%</div>
                        ) : null}
                        <div className={styles.title}>{product.product_title}</div>
                        <div className={styles.description}>{product.description}</div>
                        <div className={'d-flex  align-items-end'}>
                            <div className={styles.newPrice}>${product.price}</div>
                            {fullPrice !== '' ? (
                                <div className={styles.oldPrice}>${fullPrice}</div>
                            ) : null}
                        </div>
                        <div className={styles.br}/>

                        <div className={styles.productColorBox}>
                            {/*<div className={styles.productColorText}>{selectedColor !== ""*/}
                            {/*    ? `Color: "${tempCartProduct.color}"`*/}
                            {/*    : `Color: "${product.colors[0].color}"`}</div>*/}
                            <div className={styles.productColorText}>Color:<span className={'black ms-1'}>{product.colors[0].color}</span></div>
                            <div className={styles.productColorImg}>
                                {product.colors.map((color, index) => (
                                    // <a href={`/product/${color.product_id}`}><img key={index} onClick={colorHandler}
                                    <a href={`/product/${color.product_id}`} key={index}><img
                                        // className={(selectedColor === '' && index == 0)||(color.color === selectedColor)
                                        className={index === 0 ? styles.activeColor : styles.disableColor} src={color.product_thumb}
                                        id={color.color} alt="color.color"/></a>
                                ))}
                            </div>
                        </div>

                        <div className={styles.productSizeBox2}>
                            <div className={'d-flex flex-row justify-content-between m-0'}>
                                <div>Choose size</div>
                                {product.category !== 'Sunglasses' ?
                                <div data-guide={sizeGuide} onClick={toggle}>
                                    <a href="#" className={'text-decoration-none'}>Size guide</a>
                                </div> : null}
                            </div>
                            <div className={styles.sizes}>
                                {/*<select onChange={selectSizeChange} className="form-select">*/}
                                <select onChange={(e) => setSelectedSizeOption(e.target.value)} className="form-select">
                                    {product.size.map((size, index) => (
                                        <option className={styles.productSize} value={size} key={index}>{size}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <button className={styles.addBtn} onClick={addToCart}>Add to cart</button>
                        <div className={styles.br}/>

                        <div className={styles.aditionalInfo}>
                            <div>
                                <DropDownOut title={"Details"} text={product.details}/>
                                <div className={styles.br}/>
                            </div>
                            <div>
                                <DropDownOut title={"Shipping & Returns"} text={"We offer fast and reliable shipping to " +
                                    "your doorstep, ensuring your purchases arrive promptly. If you're not completely " +
                                    "satisfied with your order, our hassle-free return policy makes it easy to initiate " +
                                    "returns and exchanges within 30 days of purchase."}/>
                                <div className={styles.br}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'d-flex justify-content-center'}>
                    <div className={styles.br}/>
                </div>
            </div>
            <AlsoLike/>
        </div>}</>
    );
}
export default ProductDetailPage;