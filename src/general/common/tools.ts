import Product from "../../module/product_page/domain/model/Product";
import {sizes} from "../data/sizes";

export function convertToUnderscoreFormat(inputString: string): string {
    return inputString.replace(/ /g, '_');
}

export function convertToSpaceFormat(inputString: string): string {
    return inputString.replace(/_/g, ' ');
}

export function convertDiscountToPercent(price: number, discount: number): number{
    return (price <= 0 || discount < 0 || discount >= 100) ? 0 :
        Math.round(discount * 100 / (price + discount));
}

export function getFullPrice(price: number, discount: number): string {
    return (Number(price) + Number(discount)).toFixed(2);
}

export default function convertDate(inputDate: string) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}.${month}.${year}`;
}

export function convertDateToOrderDate(inputDate: string) {
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];

    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${monthName[+month-1]} ${day}, ${year}`;
}

export function sortProductSizesColors(product: Product): Product {
    if(product.colors.length > 1) {
        const productColorIndex = product.colors.findIndex(c => c.product_id == product.product_id);
        if(productColorIndex !== -1) {
            const [targetItem] = product.colors.splice(productColorIndex, 1);
            product.colors.unshift(targetItem);
        }
    }

    if(product.category === 'Sunglasses' || product.size.length <= 1){
        return product;
    } else if(product.category === 'Shoes') {
        product.size = product.size.map(s => Number(s)).sort((a, b) => a - b).map(s => s.toString());
    } else {
        product.size = product.size.slice().sort((a, b) => {
            const indA = sizes.indexOf(a);
            const indB = sizes.indexOf(b);
            return indA - indB;
        })
    }
    return product;
}

export function convertBlogArticleTitle(title: string): string {
    return title.replace(/\s\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/g, '');
}

export function  convertBlogArticleBody(body: string): string {
    return body.replace(/[{}]/g, '');
}