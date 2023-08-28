import BlogPageRepository from "../../domain/BlogPageRepository";
import {blogArticlesResponse, headersList} from "./articlesList";
import api_client from "../../../../general/data/api_client";
import {setArticlesListDataAction, setHeadersListDataAction} from "../../redux/asyncActions";
import HeadersList from "../../domain/model/HeadersList";
import {ApiResponseBlogPreview} from "../../../../general/dto/APIResponseTypes";
import formatDate from "../../dateTransformer";

export default class BlogRepositoryImpl implements BlogPageRepository{

    async getArticlesList(pageNumber: number): Promise<ApiResponseBlogPreview> {
        try {
            const res = await api_client.get<ApiResponseBlogPreview>(`/blog?page=${pageNumber}&size=6`)
            setArticlesListDataAction(res.data)
            return res.data
        }
            catch(error: any) {
                console.log("ERROR: ")
                console.log(error.message)
                //setLoading(false);
            }
         return Promise.resolve(blogArticlesResponse);
    }

    async getHeadersList(): Promise<Array<HeadersList>> {
        try {
            const res = await api_client.get<Array<HeadersList>>('/blog/header');
            res.data.forEach(h => {
                h.title = h.title.replace(/\s\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/g, '');
                h.timestampDateMod = formatDate(h.timestampDateMod);
            });
            setHeadersListDataAction(res.data);
            return res.data;
        } catch(error: any) {
            console.log("ERROR: ")
            console.log(error.message)
            //setLoading(false);
        }
        return Promise.resolve(headersList.articles);
    }

}
