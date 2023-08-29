import BlogArticlePageRepository from "../domain/BlogArticlePageRepository";
import Article from "../domain/model/Article";
import apiClient from "../../../general/data/api_client";
import {setArticleDataAction} from "../redux/asyncActions";
import {convertBlogArticleBody, convertBlogArticleTitle} from "../../../general/common/tools";


export default class BlogArticlePageFakeRepository implements BlogArticlePageRepository {
    async getArticleDetails(id: string): Promise<Article> {
        try {
            const response = await apiClient.get<Article>('/blog/' + id);
            let article = response.data;
            article.title = convertBlogArticleTitle(article.title);
            article.body = convertBlogArticleBody(article.body);
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
