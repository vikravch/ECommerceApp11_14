import {ProductPageStore} from "../../module/product_page/redux/typesProductPage";
import {ArticlePageStore} from "../../module/article_page/redux/typesArticlePage";

export interface Store{
    productPage: ProductPageStore,
    articlePage: ArticlePageStore
}