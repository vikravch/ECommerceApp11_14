import BlogPageRepository from "../../domain/BlogPageRepository";
import {blogArticles, headersList} from "./articlesList";
import ArticleInfo from "../../domain/model/ArticlesList";
import api_client from "../../../../general/data/api_client";
import {setArticlesListDataAction, setHeadersListDataAction} from "../../redux/asyncActions";
import HeadersList from "../../domain/model/HeadersList";

export default class BlogPageFakeRepository implements BlogPageRepository{

    async getArticlesList(): Promise<Array<ArticleInfo>> {
        api_client.get<Array<ArticleInfo>>('/blog?page=0&size=6').then((res) => {
            setArticlesListDataAction(res.data)
        })
            .catch((err) => {
                console.log("ERROR: ")
                console.log(err.message)
                //setLoading(false);
            })
        return Promise.resolve(blogArticles);
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
