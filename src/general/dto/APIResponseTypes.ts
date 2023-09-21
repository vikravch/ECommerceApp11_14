import ProductPreviewInfo from "../../module/product_page/domain/model/ProductPreviewInfo";
import ArticleInfo from "../../module/blog_page/domain/model/ArticlesList";
import CollectionInfo from "../../module/collections/types/CollectionInfo";
import CartProduct from "../../module/cart/domain/model/CartProduct";

class Sort {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;

    constructor(data: Sort) {
        this.empty = data.empty;
        this.unsorted = data.unsorted;
        this.sorted = data.sorted;
    }
}

class Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;

    constructor(data: Pageable) {
        this.sort = new Sort(data.sort);
        this.offset = data.offset;
        this.pageNumber = data.pageNumber;
        this.pageSize = data.pageSize;
        this.paged = data.paged;
        this.unpaged = data.unpaged;
    }
}

export class PaginationData { // Parent
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;

    constructor(data: PaginationData) {
        this.last = data.last;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
        this.size = data.size;
        this.number = data.number;
        this.sort = data.sort;
        this.first = data.first;
        this.numberOfElements = data.numberOfElements;
        this.empty = data.empty;
    }
}

export class ApiResponseProductPreview {
    content: ProductPreviewInfo[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

    constructor(data: ApiResponseProductPreview) {
        this.content = data.content.map((item) => new ProductPreviewInfo(item));
        this.pageable = new Pageable(data.pageable);
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        this.size = data.size;
        this.number = data.number;
        this.sort = new Sort(data.sort);
        this.first = data.first;
        this.numberOfElements = data.numberOfElements;
        this.empty = data.empty;
    }
}

//==================   BLOG   ===================================================================
export class ApiResponseBlogPreview extends PaginationData {
    content: Array<ArticleInfo>;
    pageable: Pageable;

    constructor(data: ApiResponseBlogPreview) {
        super(data);
        this.content = data.content.map((item) => new ArticleInfo(item));
        this.pageable = new Pageable(data.pageable);
    }
}

export class ApiResponseBlogHeader {
    id: string;
    title: string;
    timestampDateMod: string;

    constructor(data: ApiResponseBlogHeader) {
        this.id = data.id;
        this.title = data.title;
        this.timestampDateMod = data.timestampDateMod;
    }
}

export class ApiResponseCollections {
    content: CollectionInfo[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

    constructor(data: ApiResponseCollections) {
        this.content = data.content.map((item) => new CollectionInfo(item));
        this.pageable = new Pageable(data.pageable);
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        this.size = data.size;
        this.number = data.number;
        this.sort = new Sort(data.sort);
        this.first = data.first;
        this.numberOfElements = data.numberOfElements;
        this.empty = data.empty;
    }
}

export class ApiResponseSignUp {
    email: string;
    role: string

    constructor(data: ApiResponseSignUp) {
        this.email = data.email;
        this.role = data.role;
    }
}

export class ApiResponseSignIn {

}

export class ApiResponseCart {
    cart: CartProduct[];
    subtotal_price: number;
    products_discount: number;
    total_price: number;

    constructor(data: ApiResponseCart) {
        this.cart = data.cart.map((itemData) => new CartProduct(itemData));
        this.subtotal_price = data.subtotal_price || 0;
        this.products_discount = data.products_discount || 0;
        this.total_price = data.total_price || 0;
    }
}

// Categories:
export class ClothingCategory {
    sizes: string[];
    category_id: string;
    category_name: string;
    size_type: string;

    constructor(
       data: ClothingCategory
    ) {
        this.sizes = data.sizes;
        this.category_id = data.category_id;
        this.category_name = data.category_name;
        this.size_type = data.size_type;
    }
}


export class ApiResponseCategoryList {
    data: ClothingCategory[];

    constructor(data: ApiResponseCategoryList) {
        this.data = data.data.map((item) => new ClothingCategory(item));
    }
}

export class ApiSeasonsList {
    seasons: string[];

    constructor(data: ApiSeasonsList) {
        this.seasons = data.seasons.map((item) => (item));
    }
}
