import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools } from 'redux-devtools-extension';
import {productPageReducer} from "../../module/product_page/redux/productPageReducer";
import {cartPageReducer} from "../../module/cart/redux/cartPageReducer";

import thunk from "redux-thunk";
import {logger} from "redux-logger";


const store = createStore(
    combineReducers(
        {
            productPage: productPageReducer,
            cartPage: cartPageReducer,
            //checkout: checkoutPageReducer,
        }
    ), composeWithDevTools(
    applyMiddleware(thunk, logger))
)

export default store;