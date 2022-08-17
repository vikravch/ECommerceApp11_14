import Article from "../domain/model/Article";

export interface ArticlePageStore{
    article: Article,
    isLoading: boolean
}