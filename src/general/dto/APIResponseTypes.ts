import ProductPreviewInfo from "../../module/product_page/domain/model/ProductPreviewInfo";

// Product Preview Response types for Landing, Catalogue, AlsoLike
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

export default class ApiResponseProductPreview {
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


