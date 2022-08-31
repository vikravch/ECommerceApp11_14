import ArticlesList from "../model/ArticlesList";
import Repository from "../../data/fake_api/BlogPageFakeRepository"

export default async function getArticlesList():Promise<ArticlesList>{
    return new Repository().getArticlesList();
}