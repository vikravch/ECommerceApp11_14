import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools } from 'redux-devtools-extension';
import {productPageReducer} from "../../module/product_page/redux/productPageReducer";
import {cartPageReducer} from "../../module/cart/redux/cartPageReducer";
import {checkoutPageReducer} from "../../module/checkout/redux/checkoutPageReducer";

import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {landingPageReducer} from "../../module/landing_page/redux/landingPageReducer";

const store = createStore(
    combineReducers(
        {
            productPage: productPageReducer,
            landingPage: landingPageReducer,
            cartPage: cartPageReducer,
            checkout: checkoutPageReducer,
        }
    ), composeWithDevTools(
    applyMiddleware(thunk, logger))
)

export default store;