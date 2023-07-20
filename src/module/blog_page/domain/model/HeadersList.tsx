export default class HeadersList {
    id: string;
    title: string;
    timestampDateMod: string;

    constructor(title: string, id: string, timestampDateMod: string) {
        this.title = title;
        this.id = id;
        this.timestampDateMod = timestampDateMod;
    }
}
