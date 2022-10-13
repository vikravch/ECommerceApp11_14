import ArticleInfo from "./model/ArticleInfo";

export default interface BlogArticlePageRepository {
    getArticlesList: () => Promise<Array<ArticleInfo>>;
}