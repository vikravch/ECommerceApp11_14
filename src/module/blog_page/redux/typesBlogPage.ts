import ArticleInfo from "../domain/model/ArticlesList";
import HeadersList from "../domain/model/HeadersList";

export interface BlogPageStore{
    articlesList: Array<ArticleInfo>,
    headersList: Array<HeadersList>
    isLoading: boolean,
    currentPage: number
}