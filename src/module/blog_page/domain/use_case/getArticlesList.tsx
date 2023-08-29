import Repository from "../../data/BlogRepositoryImpl"
import {ApiResponseBlogHeader, ApiResponseBlogPreview} from "../../../../general/dto/APIResponseTypes";

export async function getArticlesList(pageNumber: number):Promise<ApiResponseBlogPreview>{
    return new Repository().getArticlesList(pageNumber);
}

export async function getHeadersList():Promise<Array<ApiResponseBlogHeader>>{
    return new Repository().getHeadersList();
}