import {ProductPageStore} from "../../module/product_page/redux/typesProductPage";
import {CartPageStore} from "../../module/cart/redux/typesCartPage";
import {ArticlePageStore} from "../../module/article_page/redux/typesArticlePage";
import {ProfileDetailsStore} from "../../module/profile/redux/typesProfilePage";
import {LandingPageStore} from "../../module/landing_page/redux/typesLandingPage";
import {BlogPageStore} from "../../module/blog_page/redux/typesBlogPage";
import {OrdersDetailsStore} from "../../module/profile/redux/typesOrdersPage";
import {ChekoutPageStore} from "../../module/checkout/redux/typesCheckoutPage";
import {CategoryPageStore} from "../../module/category/redux/typesCategoryPage";
import {LoginPageStore} from "../../module/login/redux/typesLoginPage";
import {BreadCrumbsStore} from "../../module/breadcrumbs/redux/typesBreadcrumbs";

export interface Store{
    productPage: ProductPageStore,
    // pagination: PaginationStore,
    articlePage: ArticlePageStore
    landingPage: LandingPageStore,
    cartPage: CartPageStore,
    checkout: ChekoutPageStore,
    categoryPage: CategoryPageStore,
    profileDetails: ProfileDetailsStore,
    ordersDetails: OrdersDetailsStore,
    blogPage: BlogPageStore,
    loginPage: LoginPageStore,
    breadcrumbs: BreadCrumbsStore
}