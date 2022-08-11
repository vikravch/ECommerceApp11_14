import React from "react";
import img from "../../../images/t-shirt-7114.png"
import {useDispatch, useSelector} from "react-redux";
//import {Store} from "../../../general/redux/storeTypes";
//import {useParams} from "react-router-dom";
import {addToCartAction} from "../../cart/redux/asyncActions";
import Cart from "../../cart/domain/model/Cart";

const ProductDetailPage:React.FC = ()=> {
    //const {productId} = useParams<string>()
    //const cart: Cart = useSelector<Store, Cart>(state => state.cartPage);
    //const idCart = useSelector<Store,string>(state => state.cartPage.idCart);
    const dispatch = useDispatch()

    const product = {
        idProduct: "7114",
        image: "../public/images/t-shirt-7114.png",
        title: "Basic t-shirt",
        color: "Purple",
        size: "L / 14 US",
        price: 55
    }

    return (
        <section style={{backgroundColor: "#eee"}}>
            <div className="container py-3">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-5 col-xl-3">
                        <div className="card text-black">
                            <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                            <img src="http://via.placeholder.com/165x200"
                                 className="card-img-top" alt="Apple Computer"/>
                            <div className="card-body">
                                <div className="text-center">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="text-muted mb-4">#{product.idProduct}</p>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <span>Color</span><span>{product.color}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Size</span><span>{product.size}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Price</span><span>{product.price}</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                    <button onClick={() => dispatch(addToCartAction(product))} className="btn btn-primary" >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ProductDetailPage;