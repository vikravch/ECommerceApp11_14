import {applyMiddleware, combineReducers, createStore} from "redux"
import {productPageReducer} from "../../module/product_page/redux/productPageReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";

const store = createStore(
    combineReducers(
        {
            productPage: productPageReducer,

        }
    ),
    applyMiddleware(thunk, logger)
)

export default store;