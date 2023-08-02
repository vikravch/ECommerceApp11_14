
import {ApiResponseProductPreview} from "../../../general/dto/APIResponseTypes";


export interface LandingPageStore{
    isLoading: boolean;
    productsData: ApiResponseProductPreview;
    currentPage: number;
    // blogData: ApiResponseBlogPreview
    // blogCurrentPage: number;
}
