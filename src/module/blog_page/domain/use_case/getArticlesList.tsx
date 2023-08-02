import Repository from "../../data/fake_api/BlogPageFakeRepository"
import {ApiResponseBlogPreview} from "../../../../general/dto/APIResponseTypes";

export async function getArticlesList():Promise<ApiResponseBlogPreview>{
    return new Repository().getArticlesList();
}

export async function getHeadersList():Promise<Array<any>>{
    return new Repository().getHeadersList();
}