import ArticlesList from "./model/ArticlesList";

export default interface BlogArticlePageRepository {
    getArticlesList: () => Promise<Array<ArticlesList>>;
}