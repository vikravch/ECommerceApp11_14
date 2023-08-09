import {ApiResponseCollections} from "../../../general/dto/APIResponseTypes";


export interface CollectionPageStore{
    isLoading: boolean;
    collectionData: ApiResponseCollections;
    currentPage: number;
    // blogData: ApiResponseBlogPreview
    // blogCurrentPage: number;
}


