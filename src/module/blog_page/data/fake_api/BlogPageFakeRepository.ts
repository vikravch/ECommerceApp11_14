import BlogPageRepository from "../../domain/BlogPageRepository";
import {DOMAIN_NAME} from "../../../../general/data/server_setting";
import {articlesList} from "./articlesList";
import ArticleInfo from "../../domain/model/ArticlesList";


export default class BlogPageFakeRepository implements BlogPageRepository{
    async getArticlesList(): Promise<Array<ArticleInfo>> {
        const response = await fetch(`${DOMAIN_NAME}all_articles_info_get`)

        if(response.ok){
            console.log(response)
            const json = await response.json();
            try{
                const resArticleList = JSON.parse(json) as Array<ArticleInfo>;
                return Promise.resolve(resArticleList);
            } catch(err){
                return Promise.reject(err);
            }
        } else {
            return Promise.reject(new Error("Response failed"));
        }
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