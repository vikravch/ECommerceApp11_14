import ArticlesInfo from "../model/ArticlesList";
import Repository from "../../data/fake_api/BlogPageFakeRepository"

export async function getArticlesList():Promise<Array<ArticlesInfo>>{
    return new Repository().getArticlesList();
}

export async function getHeadersList():Promise<Array<any>>{
    return new Repository().getHeadersList();
}