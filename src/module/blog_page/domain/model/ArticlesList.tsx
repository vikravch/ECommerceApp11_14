export default class ArticleInfo {
    id: string;
    body?: string;
    thumbImgUrl?: string;
    title: string;
    timestampDateMod: string;

    constructor(data: ArticleInfo) {
        this.title = data.title;
        this.id = data.id;
        this.body = data.body;
        this.thumbImgUrl = data.thumbImgUrl;
        this.timestampDateMod = data.timestampDateMod;
    }
}
