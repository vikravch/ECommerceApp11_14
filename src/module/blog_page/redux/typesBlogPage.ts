import ArticleInfo from "../domain/model/ArticleInfo";

export interface BlogPageStore{
    articlesList: Array<ArticleInfo>,
    isLoading: boolean
}