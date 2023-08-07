import Repository from "../../data/fake_api/BlogPageFakeRepository"
import {ApiResponseBlogPreview} from "../../../../general/dto/APIResponseTypes";

export async function getArticlesList(pageNumber: number):Promise<ApiResponseBlogPreview>{
    return new Repository().getArticlesList(pageNumber);
}

export async function getHeadersList():Promise<Array<any>>{
    return new Repository().getHeadersList();
}