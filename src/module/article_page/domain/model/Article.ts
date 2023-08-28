export default class Article {
    id: string;
    title: string;
    body:string;
    timestampDateMod:string;


    constructor(id: string, title: string, body: string, images: string[], thumbImg: string, timestampDateMod: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.timestampDateMod = timestampDateMod;
    }
}