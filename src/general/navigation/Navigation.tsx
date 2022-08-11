import React, {useContext} from 'react';
import {routes} from "./routes";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to={`/${routes.productDetail}`} className={'nav-link'}>
                                Product
                        </Link>
                        </li>
                        <Link to={`/${routes.cart}`} className={'nav-link'}>
                            <li className="nav-item">
                                Cart
                            </li>
                        </Link>
                        <Link to={`/${routes.checkout}`} className={'nav-link'}>
                            <li className="nav-item">
                                Checkout
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    <hr className="my-4"/>
    </>
    );
};

const primaryColor = "salmon";
const styleTheme = {
    ul:{height:"40px", background:primaryColor},
    li:{display:"inline-block", padding:"12px", cursor:"pointer"}
}

export default Navigation;