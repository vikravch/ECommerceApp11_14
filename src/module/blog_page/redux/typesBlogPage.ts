import ArticlesList from "../domain/model/ArticlesList";

export interface BlogPageStore{
    articlesList: ArticlesList,
    isLoading: boolean
}