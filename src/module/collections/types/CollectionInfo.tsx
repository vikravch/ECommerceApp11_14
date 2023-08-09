export default class CollectionInfo {
    collection_id: string;
    img_url?: string;
    name: string;

    constructor(data: CollectionInfo) {
        this.name = data.name;
        this.collection_id = data.collection_id;
        this.img_url = data.img_url;
    }
}
