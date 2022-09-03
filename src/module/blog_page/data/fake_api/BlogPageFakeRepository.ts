import BlogPageRepository from "../../domain/BlogPageRepository";
import {DOMAIN_NAME} from "../../../../general/data/server_setting";
import {articlesList} from "./articlesList";

export default class BlogPageFakeRepository implements BlogPageRepository{
    async getArticlesList(): Promise<any> {
        //const res = await fetch(`${DOMAIN_NAME}all_articles_info_get`);
        const res = JSON.parse(articlesList);
        return new Promise((resolve => {
            resolve(res);
        }));
    }
}