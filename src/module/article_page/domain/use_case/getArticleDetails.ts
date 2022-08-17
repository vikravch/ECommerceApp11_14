import Article from "../model/Article";
import Repository from "../../data/fake_api/BlogArticlePageFakeRepositry"

export default async function getArticleDetails(articleId: string):Promise<Article>{
    return new Repository().getArticleDetails(articleId);
}