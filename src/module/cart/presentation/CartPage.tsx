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


    //TODO useEffect depending on TOKEN

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
            <div className="container" style={{maxWidth: 1070}}>

            <h1>Cart</h1>
            <div className="mb-5 row">
                <div className="col-lg-8">
                        <div className="cart-body">
                            {cartItems.map((item) => (
                            <div className="cart-item my-4" key={item.product_id}>
                                <div className="d-flex text-start row">
                                    <div className="col-md-8 col-12">
                                        <div className="d-flex">
                                                <img className={style.cart_item_img} src={item.product_thumb} alt=''/>
                                            <div className="cart-title text-start ms-3">
                                                <div className="row h-50">
                                                    <p className="mb-0"><label className="text-muted">#{item.product_id}</label></p>
                                                    <p className="mb-0 card-title"><a className="text-dark fs-4 text-decoration-none fw-500" href={item.product_id}>{item.product_title}</a></p>
                                                    <p className="text-muted mb-0">{item.color}</p>
                                                </div>
                                                <div className="row h-50 d-flex align-items-end">
                                                    <div className="col-md-7">
                                                    <label htmlFor="size" className="form-label text-muted small mb-0">Size</label>
                                                        <select className="form-select" id="size" required defaultValue={item.size} onChange={(e: ChangeEvent<{value: string}>) => {
                                                            dispatch(changeSizeAction(item.product_id, e.target.value));}}>
                                                            {sizes.map((size, index) => (
                                                                <option key={index} value={size}>{size}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-5">
                                                    <label htmlFor="quantity" className="form-label text-muted small mb-0">Quantity</label>
                                                        <input id="quantity"
                                                               className="form-control mw-100"
                                                               type="number"
                                                               defaultValue={item.count}
                                                               onChange={(e: ChangeEvent<{value: string}>) => { dispatch(changeCountAction(item.product_id, +e.target.value))}}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12 mt-md-0 px-6 h-200">
                                        <div className="d-block h-100">
                                        <div className="cart-title row h-50 align-items-start">
                                            <p className="mb-0 card-title text-dark text-end fs-4 fw-500">
                                                {(item.discount > 0)?<label className="me-2 text-muted" style={{textDecoration: "line-through", textDecorationColor: "rgba(250, 74, 105, 1)"}}>${Math.round((100 * item.price) / (100 - item.discount)) + "  "}</label>:null}
                                                ${item.price}</p>
                                        </div>
                                        <div className="row h-50 align-items-end">
                                            <button className="btn btn-link text-end text-muted text-decoration-none"
                                                    onClick={() => dispatch(removeFromCartAction(item.product_id))}>
                                                Remove
                                            </button>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                            ))}

                        </div>
                    </div>
                {/* Summary*/}

                <div className="col-lg-4 rounded-2 border border-1">
                    <div className="block mb-5">
                        <div className="block-header">
                            <h4 className="text mt-3 fw-500">Summary</h4>
                        </div>
                        <div className="block-body pt-2">
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <input type="text" className="form-control form-control-sm mb-2" placeholder="Promo Code"/>
                                    </div>
                                    <button className="btn btn-sm btn-light border border-1" style={{height: 30, width: 70}}>Apply</button>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <p className="my-0">Subtotal</p>
                                    </div>
                                    <p className="my-0">${total}</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <p className="my-0">Estimated Shipping & Handling</p>
                                    </div>
                                    <p className="my-0">$0.00</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm py-4">
                                    <label className="fs-4 fw-500">Total</label>
                                    <label className="fs-4 fw-500">${total}</label>
                                </li>
                                <li className="list-group-item d-flex justify-content-center lh-sm py-4">

                                    <a href={profileBtn} className="btn btn-lg btn-primary w-100">
                                        {/*<Link to="/checkout" className="btn btn-lg btn-primary w-100">*/}
                                        Checkout
                                        {/*/!*</Link>*/}
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
