import Article from "../model/Article";
import Repository from "../../data/BlogArticleRepositryImpl"

export default async function getArticleDetails(id: string):Promise<Article>{
    return new Repository().getArticleDetails(id);
}