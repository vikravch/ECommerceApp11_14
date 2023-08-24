
import {ApiResponseProductPreview} from "../../../general/dto/APIResponseTypes";
import {PaginationData} from "../../pagination/redux/typesPagination";


export interface LandingPageStore{
    isLoading: boolean;
    productsData: ApiResponseProductPreview;
    pageData: PaginationData;
    currentPage: number;
    // blogData: ApiResponseBlogPreview
    // blogCurrentPage: number;
}
