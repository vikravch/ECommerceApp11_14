import ArticleInfo from "../domain/model/ArticlesList";
import {ApiResponseBlogHeader, PaginationData} from "../../../general/dto/APIResponseTypes";

export interface BlogPageStore{
    articlesList: Array<ArticleInfo>,
    pageData: PaginationData,
    headersList: Array<ApiResponseBlogHeader>
    isLoading: boolean,
    currentPage: number
}