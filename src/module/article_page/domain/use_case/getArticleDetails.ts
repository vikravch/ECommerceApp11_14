import Article from "../model/Article";
import Repository from "../../data/fake_api/BlogArticleRepositryImpl"

export default async function getArticleDetails(id: string):Promise<Article>{
    return new Repository().getArticleDetails(id);
}