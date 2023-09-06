import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools } from 'redux-devtools-extension';
import {productPageReducer} from "../../module/product_page/redux/productPageReducer";
import {cartPageReducer} from "../../module/cart/redux/cartPageReducer";
import {checkoutPageReducer} from "../../module/checkout/redux/checkoutPageReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {landingPageReducer} from "../../module/landing_page/redux/landingPageReducer";
import {articlePageReducer} from "../../module/article_page/redux/articlePageReducer";
import {profilePageReducer} from "../../module/profile/redux/profilePageReducer";
import {blogPageReducer} from "../../module/blog_page/redux/blogPageReduser";
import {categoryReducer} from "../../module/category/redux/categoryReducer";
import {loginPageReducer} from "../../module/login/redux/loginPageReducer";
import {paginationReducer} from "../../module/pagination/redux/paginationReducer";
import {collectionPageReducer} from "../../module/collections/redux/collectionPageReducer";

const store = createStore(
    combineReducers(
        {
            productPage: productPageReducer,
            pagination: paginationReducer,
            landingPage: landingPageReducer,
            cartPage: cartPageReducer,
            checkout: checkoutPageReducer,
            collectionPage: collectionPageReducer,
            categoryPage: categoryReducer,
            articlePage: articlePageReducer,
            profilePage: profilePageReducer,
            blogPage: blogPageReducer,
            loginPage: loginPageReducer,
        }
    ), composeWithDevTools(
    applyMiddleware(thunk, logger))
)

export default store;