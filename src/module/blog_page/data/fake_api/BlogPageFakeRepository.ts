import BlogPageRepository from "../../domain/BlogPageRepository";
import ArticlesList from "../../domain/model/ArticlesList";

// mirage.js
export default class BlogPageFakeRepository implements BlogPageRepository{
    async getArticlesList(articleId: string): Promise<ArticlesList> {
        // fetch ???
        return new Promise((resolve => {
            resolve(new ArticlesList("77777"));
        }));
    }

}