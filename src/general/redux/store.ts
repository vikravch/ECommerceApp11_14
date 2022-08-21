import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools } from 'redux-devtools-extension';
import {productPageReducer} from "../../module/product_page/redux/productPageReducer";
import {cartPageReducer} from "../../module/cart/redux/cartPageReducer";
import {checkoutPageReducer} from "../../module/checkout/redux/checkoutPageReducer";

import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {landingPageReducer} from "../../module/landing_page/redux/landingPageReducer";
import {articlePageReducer} from "../../module/article_page/redux/articlePageReducer";
import {profileDetailsReducer} from "../../module/profile/redux/profileDetailsReducer";
import {blogPageReducer} from "../../module/blog_page/redux/blogPageReduser";

const store = createStore(
    combineReducers(
        {
            productPage: productPageReducer,
            landingPage: landingPageReducer,
            cartPage: cartPageReducer,
            checkout: checkoutPageReducer,
            articlePage: articlePageReducer,
            profileDetails: profileDetailsReducer,

            blogPage: blogPageReducer
        }
    ), composeWithDevTools(
    applyMiddleware(thunk, logger))
)

export default store;