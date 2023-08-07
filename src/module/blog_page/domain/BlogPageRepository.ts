import {ApiResponseBlogPreview} from "../../../general/dto/APIResponseTypes";

export default interface BlogArticlePageRepository {
    getArticlesList: (pageNumber: number) => Promise<ApiResponseBlogPreview>;
}