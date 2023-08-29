import BlogPageRepository from "../domain/BlogPageRepository";
import api_client from "../../../general/data/api_client";
import {setArticlesListDataAction, setHeadersListDataAction} from "../redux/asyncActions";
import {ApiResponseBlogHeader, ApiResponseBlogPreview} from "../../../general/dto/APIResponseTypes";
import convertDate, {convertBlogArticleTitle} from "../../../general/common/tools";

export default class BlogRepositoryImpl implements BlogPageRepository{

    async getArticlesList(pageNumber: number): Promise<ApiResponseBlogPreview> {
        try {
            const res = await api_client.get<ApiResponseBlogPreview>(`/blog?page=${pageNumber}&size=6`)
            res.data.content.forEach(a => {
                a.title = convertBlogArticleTitle(a.title);
                a.timestampDateMod = convertDate(a.timestampDateMod);
            });
            setArticlesListDataAction(res.data)
            return res.data
        }
            catch(error: any) {
                console.log("ERROR: ")
                console.log(error.message)
                //setLoading(false);
                throw error;
            }
    }

    async getHeadersList(): Promise<Array<ApiResponseBlogHeader>> {
        try {
            const res = await api_client.get<Array<ApiResponseBlogHeader>>('/blog/header');
            res.data.forEach(h => {
                h.title = convertBlogArticleTitle(h.title);
                h.timestampDateMod = convertDate(h.timestampDateMod);
            });
            setHeadersListDataAction(res.data);
            return res.data;
        } catch(error: any) {
            console.log("ERROR: ")
            console.log(error.message)
            //setLoading(false);
            throw error;
        }
    }

}
