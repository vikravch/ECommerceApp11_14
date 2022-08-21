import {ProductPageStore} from "../../module/product_page/redux/typesProductPage";
import {CartPageStore} from "../../module/cart/redux/typesCartPage";
import {ArticlePageStore} from "../../module/article_page/redux/typesArticlePage";
import {ProfileDetailsStore} from "../../module/profile/redux/typesProfilePage";
import {LandingPageStore} from "../../module/landing_page/redux/typesLandingPage";
import {BlogPageStore} from "../../module/blog_page/redux/typesBlogPage";

export interface Store{
    productPage: ProductPageStore,
    articlePage: ArticlePageStore
    landingPage: LandingPageStore,
    cartPage: CartPageStore,
    profileDetails: ProfileDetailsStore,
    blogPage: BlogPageStore
}