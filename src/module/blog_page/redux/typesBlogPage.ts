import ArticleInfo from "../domain/model/ArticlesList";
import HeadersList from "../domain/model/HeadersList";
import {PaginationData} from "../../../general/dto/APIResponseTypes";

export interface BlogPageStore{
    articlesList: Array<ArticleInfo>,
    pageData: PaginationData,
    headersList: Array<HeadersList>
    isLoading: boolean,
    currentPage: number
}