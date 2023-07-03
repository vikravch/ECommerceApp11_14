import ProductPreviewInfo from "../../product_page/domain/model/ProductPreviewInfo";

export enum SortProps {
    PRICE_ASC = 'price',
    PPICE_DESC = '-price',
    RATING_ASC = 'rating',
    RATING_DESC = '-rating'
}

export type Sort = {
    name: string;
    prop: SortProps;
}

export interface CategoryPageStore {
    isLoading: boolean;
    data: Array<ProductPreviewInfo>;
    sort: Sort;
    currentPage: number;
}