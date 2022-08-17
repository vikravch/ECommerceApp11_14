import {applyMiddleware, combineReducers, createStore} from "redux"
import {productPageReducer} from "../../module/product_page/redux/productPageReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {articlePageReducer} from "../../module/article_page/redux/articlePageReducer";

const store = createStore(
    combineReducers(
        {
            productPage: productPageReducer,
            articlePage: articlePageReducer,
        }
    ),
    applyMiddleware(thunk, logger)
)

export default store;