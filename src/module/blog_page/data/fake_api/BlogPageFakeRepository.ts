import BlogPageRepository from "../../domain/BlogPageRepository";

import {blogArticles} from "./articlesList";
import ArticleInfo from "../../domain/model/ArticlesList";
import api_client from "../../../../general/data/api_client";
import {setArticlesListDataAction, setHeadersListDataAction} from "../../redux/asyncActions";

export default class BlogPageFakeRepository implements BlogPageRepository{
    // async getArticlesList(): Promise<Array<ArticleInfo>> {
    //     const response = await fetch(`${DOMAIN_NAME}all_articles_info_get`)
    //
    //     if(response.ok){
    //         console.log(response)
    //         const json = await response.json();
    //         try{
    //             const resArticleList = JSON.parse(json) as Array<ArticleInfo>;
    //             return Promise.resolve(resArticleList);
    //         } catch(err){
    //             return Promise.reject(err);
    //         }
    //     } else {
    //         return Promise.reject(new Error("Response failed"));
    //     }
    // }
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

    async getHeadersList(): Promise<Array<any>> {
        api_client.get<Array<any>>('/blog/header').then((res) => {
            setHeadersListDataAction(res.data)
        })
            .catch((err) => {
                console.log("ERROR: ")
                console.log(err.message)
                //setLoading(false);
            })
        return Promise.resolve(blogArticles);
    }

}

// const res = await fetch(`${DOMAIN_NAME}all_articles_info_get`);
// const res = JSON.parse(articlesList);
// return new Promise((resolve => {
//     resolve(res);
// }));
// return new Promise((resolve => {
//     resolve(response);
// }));
// }