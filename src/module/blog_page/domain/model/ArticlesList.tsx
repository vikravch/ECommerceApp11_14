export default class ArticleInfo {
    title: string;
    id: number;
    thumbImgUrl: string;
    timestampDateMod: string;

    constructor(title: string, id: number, thumbImgUrl: string, timestampDateMod: string) {
        this.title = title;
        this.id = id;
        this.thumbImgUrl = thumbImgUrl;
        this.timestampDateMod = timestampDateMod;
    }
}



// Article
// ArticleInfo -?