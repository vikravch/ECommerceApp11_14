import ArticleInfo from "../domain/model/ArticlesList";

export interface BlogPageStore{
    articlesList: Array<ArticleInfo>,
    isLoading: boolean
}