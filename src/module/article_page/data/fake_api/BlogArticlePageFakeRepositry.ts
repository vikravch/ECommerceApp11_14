import BlogArticlePageRepository from "../../domain/BlogArticlePageRepository";
import Article from "../../domain/model/Article";
import apiClient from "../../../../general/data/api_client";
import {setArticleDataAction} from "../../redux/asyncActions";


export default class BlogArticlePageFakeRepository implements BlogArticlePageRepository {
    async getArticleDetails(id: string): Promise<Article> {
        const response = await apiClient.get<Article>('/blog/' + id);
        console.log("getArticleDetails");
        setArticleDataAction(response.data);
        return response.data;
    }
}
