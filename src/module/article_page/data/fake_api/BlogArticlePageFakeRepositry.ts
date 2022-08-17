import BlogArticlePageRepository from "../../domain/BlogArticlePageRepository";
import Article from "../../domain/model/Article";

// mirage.js
export default class BlogArticlePageFakeRepository implements BlogArticlePageRepository{
    async getArticleDetails(articleId: string): Promise<Article> {
        // fetch ???
        return new Promise((resolve => {
            resolve(new Article("77777"));
        }));
    }

}