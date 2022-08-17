import {LandingPageStore, ProductPageStore} from "../../module/product_page/redux/typesProductPage";
import {CartPageStore} from "../../module/cart/redux/typesCartPage";
import {ArticlePageStore} from "../../module/article_page/redux/typesArticlePage";
import {ProfileDetailsStore} from "../../module/profile/redux/typesProfilePage";

export interface Store{
    productPage: ProductPageStore,
    articlePage: ArticlePageStore
    landingPage: LandingPageStore,
    cartPage: CartPageStore,
    profileDetails: ProfileDetailsStore,
}