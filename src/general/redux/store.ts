import {applyMiddleware, combineReducers, createStore} from "redux"
import {productPageReducer} from "../../module/product_page/redux/productPageReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {articlePageReducer} from "../../module/article_page/redux/articlePageReducer";
import {blogPageReducer} from "../../module/blog_page/redux/blogPageReduser";

const store = createStore(
    combineReducers(
        {
            productPage: productPageReducer,
            articlePage: articlePageReducer,
            blogPage: blogPageReducer
        }
    ),
    applyMiddleware(thunk, logger)
)

export default store;