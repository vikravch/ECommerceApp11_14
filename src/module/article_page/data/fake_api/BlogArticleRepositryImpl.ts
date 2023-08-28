import BlogArticlePageRepository from "../../domain/BlogArticlePageRepository";
import Article from "../../domain/model/Article";
import apiClient from "../../../../general/data/api_client";
import {setArticleDataAction} from "../../redux/asyncActions";


export default class BlogArticlePageFakeRepository implements BlogArticlePageRepository {
    async getArticleDetails(id: string): Promise<Article> {
        try {
            const response = await apiClient.get<Article>('/blog/' + id);
            let article = response.data;
            article.title = article.title.replace(/\s\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/g, '');
            article.body = article.body.replace(/[{}]/g, '');
            setArticleDataAction(response.data);
            return response.data;
        }
        catch (error: any) {
            console.log("ERROR: ");
            console.log(error.message);
            throw error;
        }

    }
}
