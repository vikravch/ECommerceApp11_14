import BlogArticlePageRepository from "../domain/BlogArticlePageRepository";
import Article from "../domain/model/Article";
import apiClient from "../../../general/data/api_client";
import {setArticleDataAction} from "../redux/asyncActions";
import {convertBlogArticleBody, convertBlogArticleTitle} from "../../../general/common/tools";
import {ApiResponseBlogHeader} from "../../../general/dto/APIResponseTypes";
import {blogItemFake, headersFake} from "../../blog_page/presentation/fake_data/blogFakeData";
import {setHeadersListDataAction} from "../../blog_page/redux/asyncActions";


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
           // throw error;
            return new Promise<Article>((resolve) => {
                console.log("fake article");
                setArticleDataAction(blogItemFake);
                resolve(blogItemFake);
            })
        }

    }
}
