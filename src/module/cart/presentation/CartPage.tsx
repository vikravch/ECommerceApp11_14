import React, {ChangeEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import {
    changeCountAction,
    changeSizeAction, getCart,
    removeFromCartAction
} from "../redux/asyncActions";
import {sizes} from "../../../general/data/sizes";
import CartProduct from "../domain/model/CartProduct";
import {Link} from "react-router-dom";
import AlsoLike from "../../product_page/presentation/AlsoLike";
import style from "../presentation/CartPage.module.css"
import {getArrivalDetailsAction} from "../../landing_page/redux/asyncActions";
import {convertDiscountToPercent, getFullPrice} from "../../../general/common/tools";

//TODO:
// 1. No button in productPreview
// 2. user not authorized: save cartProduct to Store.
// 3.  not authorized user: want to checkOut -> we redirect to SignIn/SingUp, after we post cart from Store to server,
// and receive response with full cart (merged on server)
// 4. authorized user: onClick addToCart - item to server (id and size?)
// 5. authorized user: receive cart from server by user token
//

const CartPage:React.FC = () => {
    const cartItems = useSelector<Store, Array<CartProduct>>(state => state.cartPage.cartItems)
    const total = useSelector<Store, number>(state => state.cartPage.cartTotal)
    const count = useSelector<Store, number>(state => state.cartPage.cartItems.length)
    const dispatch = useDispatch()


    //TODO useEffect depending on TOKEN --> it must be in asyncActions; which repository to choose

    // TODO fix Total $190.98000000000002; Subtotal $190.98000000000002; breadcrumbs

    useEffect(() => {
        if (cartItems.length < 1) {

            dispatch(getCart(''))
        }
    }, [cartItems]);


    if (count === 0) return (
        <div className="container" style={{maxWidth: 1070}}>
            <h1 className="text-muted fw-500 my-3">Your cart is empty</h1>

            <Link to="/" className="btn btn-lg btn-dark mb-5">
                Go to main page
            </Link>
            <AlsoLike/>
        </div>
    )
    let profileBtn = sessionStorage.getItem("token") ? "/profile" : "/login";


    return (<>
            <div className="container p-0" style={{minWidth: 320}}>
            <p className={style.main}>Main / <span className={'black'}>Wishlist</span></p>
            <h1 className={style.mb30}>Cart</h1>
            <div className="mb-5 row justify-content-evenly">
                <div className="col-lg-6 p-0">
                        <div className="cart-body">
                            {cartItems.map((item) => (
                            <div className="cart-item" key={item.product_id}>
                                <div className={`d-flex text-start row ${style.maxWidth100}`}>
                                    <div className={`col-sm-9 col-md-9 col-12 pe-0`}>
                                        <div className="d-flex position-relative">
                                            <a href={'/product/' + item.product_id}>
                                                <img className={style.cart_item_img} src={item.product_thumb} alt=''/>
                                                {+item.discount > 0 ? <div className={style.discount}>-{convertDiscountToPercent(+item.price, +item.discount)}%</div> : ''}
                                            </a>
                                            <div className="cart-title text-start ms-3">
                                                <div className="row h-50">
                                                    <p className="mb-0"><span className="text-muted">#{item.product_id}</span></p>
                                                    <p className="mb-0 card-title"><a className={style.title} href={'/product/' + item.product_id}>{item.product_title}</a></p>
                                                    <p className="text-muted mb-0">{item.color}</p>
                                                </div>

                                                {/*Size Quantity*/}
                                                <div className="row h-50 d-flex align-items-end">
                                                    <div className="col-sm-6 col-md-7" style={{minWidth: 190}}>
                                                        <label htmlFor={`size${item.product_id}`} className="form-label text-muted small mb-0">Size</label>
                                                        <select className="form-select p-sm-0 ps-sm-2" id={`size${item.product_id}`} required defaultValue={item.size} onChange={(e: ChangeEvent<{value: string}>) => {
                                                            dispatch(changeSizeAction(item.product_id, e.target.value));}}>
                                                            {item.stock_sizes.map((size, index) => ( size == item.size ?
                                                                    <option key={index} value={size} selected>{size}</option> :
                                                                    <option key={index} value={size}>{size}</option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="col-sm-3 col-md-3" style={{minWidth: 94}}>
                                                        <label htmlFor={`quantity${item.product_id}`} className="form-label text-muted small mb-0">Quantity</label>
                                                        <input id={`quantity${item.product_id}`}
                                                           className="form-control p-sm-0 ps-sm-2 mw-100"
                                                           type="number" min={"0"} max={item.stock_quantity ? item.stock_quantity : ''} //TODO check stock quantity
                                                           step="1"
                                                           defaultValue={item.count}
                                                           onChange={(e: ChangeEvent<{value: string}>) => {
                                                               if(+e.target.value < 0) {
                                                                   e.target.value = "1";
                                                               } else if(+e.target.value == 0) {
                                                                   dispatch(removeFromCartAction(item.product_id))
                                                               } else {
                                                                   dispatch(changeCountAction(item.product_id, +e.target.value))
                                                               }}}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-3 col-md-3 col-12 mt-md-0 p-0 h-200">
                                        <div className="d-block h-100">
                                        <div className="cart-title row h-50 align-items-start">
                                            <p className={`mb-0 text-end ${style.title}`}>
                                                {(+item.discount > 0)?<span className={style.fullPrice}>${getFullPrice(+item.price, +item.discount)}</span>:null}
                                                ${item.price}</p>
                                        </div>
                                        <div className="row h-50 align-items-end">
                                            <button className="btn btn-link text-end text-muted text-decoration-none p-0"
                                                    onClick={() => dispatch(removeFromCartAction(item.product_id))}>
                                                Remove
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.br}/>
                            </div>
                            ))}

                        </div>
                    </div>
                {/* Summary*/}

                <div className={`col-md-10 col-lg-3 rounded-2 border border-1 ps-4 pe-4 ${style.minContentHeight}`}>
                    <div className="block mb-4">
                        <div className="block-header">
                            <h4 className={style.summary}>Summary</h4>
                        </div>
                        <div className="block-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between lh-sm p-0">
                                    <input type="text" name={'placeholder'} className="form-control form-control-sm" placeholder="Promo Code"/>
                                    <button className="btn btn-sm btn-light border border-1" style={{height: 30, width: 70}}>Apply</button>
                                </li>
                                <li className={`list-group-item d-flex justify-content-between ${style.subtotal1}`}>
                                    <div>
                                        <p className="my-0">Subtotal</p>
                                    </div>
                                    <p className="my-0">${total}</p>
                                </li>
                                <li className={`list-group-item d-flex justify-content-between ${style.subtotal2}`}>
                                    <div>
                                        <p className="my-0">Estimated Shipping & Handling</p>
                                    </div>
                                    <p className="my-0">$0.00</p>
                                </li>
                                <li className={`list-group-item d-flex justify-content-between ${style.total}`}>
                                    <span>Total</span>
                                    <span>${total}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-center p-0">
                                    <a href={profileBtn} className="btn btn-lg btn-primary w-100">
                                        {/*<Link to="/checkout" className="btn btn-lg btn-primary w-100">*/}
                                        Checkout
                                        {/*</Link>*/}
                                        </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                </div>
        </div>
        </>
);
}
export default CartPage;
