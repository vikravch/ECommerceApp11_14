import ArticlesList from "./model/ArticlesList";

export default interface BlogArticlePageRepository {
    getArticlesList: (articleId: string) => Promise<ArticlesList>;
}