import BlogArticlePageRepository from "../../domain/BlogArticlePageRepository";
import Article from "../../domain/model/Article";
import {article} from "./article";


export default class BlogArticlePageFakeRepository implements BlogArticlePageRepository{
    async getArticleDetails(id: string): Promise<Article> {
        //const res = await fetch(`${DOMAIN_NAME}article_get?id=${id}`);
        const res = JSON.parse(article);
        return new Promise((resolve => {
            resolve(res);
        }));
    }

}