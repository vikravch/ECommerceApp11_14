import ArticlesInfo from "../model/ArticlesList";
import Repository from "../../data/fake_api/BlogPageFakeRepository"

export default async function getArticlesList():Promise<Array<ArticlesInfo>>{
    return new Repository().getArticlesList();
}