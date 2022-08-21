import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../general/redux/storeTypes";
import {decrementCartCount, incrementCartCount, removeFromCartAction} from "../redux/asyncActions";
import { CartProduct} from "../redux/typesCartPage";
import {sizes} from "../../../general/data/sizes";

const CartPage:React.FC = () => {
    const cartItems = useSelector<Store, Array<CartProduct>>(state => state.cartPage.cartItems)
    const dispatch = useDispatch()

       return (<>
            <div className="container" style={{maxWidth: 1070}}>
                <h1>Cart</h1>
            <div className="mb-5 row">
                <div className="col-lg-8">
                        <div className="cart-body">
                            {cartItems.map((item) => (
                            <div className="cart-item my-4" key={item.idProduct}>
                                <div className="d-flex text-start row">
                                    <div className="col-md-8 col-12">
                                        <div className="d-flex">
                                                <img className="cart-item-img rounded-3" src="http://via.placeholder.com/165x200" alt=''/>
                                            <div className="cart-title text-start ms-3">
                                                <div className="row h-50">
                                                    <p className="mb-0"><label className="text-muted">#{item.idProduct}</label></p>
                                                    <p className="mb-0 card-title"><a className="text-dark fs-4 text-decoration-none fw-500" href={item.idProduct}>{item.product_title}</a></p>
                                                    <p className="text-muted mb-0">{item.color}</p>
                                                </div>
                                                <div className="row h-50 d-flex align-items-end">
                                                    <div className="col-md-7">
                                                    <label htmlFor="size" className="form-label text-muted small mb-0">Size</label>
                                                        <select className="form-select" id="size" required>
                                                            <option value={item.size}>{item.size}</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-5">
                                                    <label htmlFor="quantity" className="form-label text-muted small mb-0">Quantity</label>
                                                        <input id="quantity" className="form-control mw-100" type="number" value={item.count}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12 mt-md-0 px-6 h-200">
                                        <div className="d-block h-100">
                                        <div className="cart-title row h-50 align-items-start">
                                            <p className="mb-0 card-title text-dark text-end fs-4 fw-500">
                                                {/*/!*{(item.discount)?<label className="me-2" style={{textDecoration: "line-through", color: "rgba(250, 74, 105, 1), "}}>${Math.round((100 * item.price) / (100 - item.discount)) + "  "}</label>:null}*!/*/}
                                                {/*${item.price}</p>*/}
                                                {(item.discount)?<label className="me-2 text-muted" style={{textDecoration: "line-through", textDecorationColor: "rgba(250, 74, 105, 1)"}}>${Math.round((100 * item.price) / (100 - item.discount)) + "  "}</label>:null}
                                                ${item.price}</p>
                                        </div>
                                        <div className="row h-50 align-items-end">
                                            <button className="btn btn-link text-end text-muted text-decoration-none"
                                                    onClick={() => dispatch(removeFromCartAction(item.idProduct))}>
                                                Remove
                                            </button>
                                        </div>
                                            {/*    <div className="align-items-center row">*/}
                                            {/*        <div className="col-md-12 col-sm-3 col-5">*/}
                                            {/*            <div className="d-flex align-items-center">*/}
                                            {/*                <div className="btn btn-items btn-items-decrease"*/}
                                            {/*                     onClick={() => dispatch(decrementCartCount(item.idProduct))}>-</div>*/}
                                            {/*                <p className="text-center border-0 border-md input-items form-control">*/}
                                            {/*                    {item.count}*/}
                                            {/*                </p>*/}
                                            {/*                <div className="btn btn-items btn-items-increase"*/}
                                            {/*                     onClick={() => dispatch(incrementCartCount(item.idProduct))}>+*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="col-md-3">*/}
                                            {/*    <div className="row">*/}
                                            {/*        <div className="text-end text-md-center col-md-12 col-6">${item.price*item.count}*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="d-none d-md-block text-center col-2">*/}
                                            {/*
                                            {/*</div>*/}
                                        </div>
                                        </div>
                                    </div>
                                {/*</div>*/}
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
                                    <p className="my-0">$290.00</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <p className="my-0">Estimated Shipping & Handling</p>
                                    </div>
                                    <p className="my-0">$8.00</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm py-4">
                                    <label className="fs-4 fw-500">Total</label>
                                    <label className="fs-4 fw-500">$298</label>
                                </li>
                                <li className="list-group-item d-flex justify-content-center lh-sm py-4">
                                    <button className="btn btn-lg btn-primary w-100">
                                        Checkout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                </div>

            {/*</div>*/}
        </div>
        </>
);
}
export default CartPage;
