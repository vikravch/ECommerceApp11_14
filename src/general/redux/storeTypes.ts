import {ProductPageStore} from "../../module/product_page/redux/typesProductPage";
import {ArticlePageStore} from "../../module/article_page/redux/typesArticlePage";
import {BlogPageStore} from "../../module/blog_page/redux/typesBlogPage";

export interface Store{
    productPage: ProductPageStore,
    articlePage: ArticlePageStore,
    blogPage: BlogPageStore
}