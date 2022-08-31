import ArticlesList from "../domain/model/ArticlesList";
import ArticleInfo from "../domain/model/ArticlesList";

export interface BlogPageStore{
    articlesList: Array<ArticleInfo>,
    isLoading: boolean
}