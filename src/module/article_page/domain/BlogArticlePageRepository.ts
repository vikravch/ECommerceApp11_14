import Article from "./model/Article";

export default interface BlogArticlePageRepository {
    getArticleDetails: (id: string) => Promise<Article>;
}