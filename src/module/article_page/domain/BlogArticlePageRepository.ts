import Article from "./model/Article";

export default interface BlogArticlePageRepository {
    getArticleDetails: (articleId: string) => Promise<Article>;
}