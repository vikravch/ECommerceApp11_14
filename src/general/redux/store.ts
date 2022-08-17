import {applyMiddleware, combineReducers, createStore} from "redux"
import {productPageReducer} from "../../module/product_page/redux/productPageReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {landingPageReducer} from "../../module/landing_page/redux/landingPageReducer";

const store = createStore(
    combineReducers(
        {
            productPage: productPageReducer,
            landingPage: landingPageReducer

        }
    ),
    applyMiddleware(thunk, logger)
)

export default store;