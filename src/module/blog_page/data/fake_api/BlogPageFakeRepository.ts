import BlogPageRepository from "../../domain/BlogPageRepository";
import {blogArticlesResponse, headersList} from "./articlesList";
import api_client from "../../../../general/data/api_client";
import {setArticlesListDataAction, setHeadersListDataAction} from "../../redux/asyncActions";
import HeadersList from "../../domain/model/HeadersList";
import {ApiResponseBlogPreview} from "../../../../general/dto/APIResponseTypes";

export default class BlogPageFakeRepository implements BlogPageRepository{

    async getArticlesList(): Promise<ApiResponseBlogPreview> {
        api_client.get<ApiResponseBlogPreview>('/blog?page=0&size=6').then((res) => {
            setArticlesListDataAction(res.data.content)
        })
            .catch((err) => {
                console.log("ERROR: ")
                console.log(err.message)
                //setLoading(false);
            })
        return Promise.resolve(blogArticlesResponse);
    }

    async getHeadersList(): Promise<Array<HeadersList>> {
        api_client.get<Array<HeadersList>>('/blog/header').then((res) => {
            setHeadersListDataAction(res.data)
        })
            .catch((err) => {
                console.log("ERROR: ")
                console.log(err.message)
                //setLoading(false);
            })
        console.log(headersList.articles)
        return Promise.resolve(headersList.articles);
    }

}
