import React from 'react';
import {Link} from "react-router-dom";
import style from "./Checkout.module.css";

const CheckoutSuccess = () => {
    return (
        <div className={`mb-5 ${style.minHeight}`}>
            <h2 className={"mb-5"}>Your order has been created successfully!</h2>
            <Link to="/profile" className="btn btn-lg btn-dark mb-5">
                Go to orders
            </Link>
        </div>
    );
};

export default CheckoutSuccess;