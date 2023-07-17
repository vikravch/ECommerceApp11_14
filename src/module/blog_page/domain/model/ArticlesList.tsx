export default class ArticleInfo {
    id: string;
    body: string;
    thumbImgUrl: string;
    title: string;
    timestampDateMod: string;

    constructor(title: string, id: string, thumbImgUrl: string, timestampDateMod: string, body: string) {
        this.title = title;
        this.id = id;
        this.body = body;
        this.thumbImgUrl = thumbImgUrl;
        this.timestampDateMod = timestampDateMod;
    }
}
