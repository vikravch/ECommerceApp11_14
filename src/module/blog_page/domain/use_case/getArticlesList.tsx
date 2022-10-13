import ArticleInfo from "../model/ArticleInfo";
import Repository from "../../data/fake_api/BlogPageFakeRepository"

export default async function getArticlesList():Promise<Array<ArticleInfo>>{
    return new Repository().getArticlesList();
}