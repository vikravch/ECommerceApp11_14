export default class Article {
    id: string;
    title: string;
    body:string;
    timestampDateMod:number;


    constructor(id: string, title: string, body: string, images: string[], thumbImg: string, timestampDateMod: number) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.timestampDateMod = timestampDateMod;
    }
}