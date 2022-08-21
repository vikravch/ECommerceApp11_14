import Product from "../../../product_page/domain/model/Product";
import ProductPreviewInfo from "../../../product_page/domain/model/ProductPreviewInfo";

export default class Cart extends ProductPreviewInfo{
    count: number;
    color: string;
    size: string;

    constructor(json: any, count: number, color: string, size: string) {
        super(json);
        this.count = count;
        this.color = color;
        this.size = size;
    }
}
