
export interface PaginationStore{
    data: PaginationData;
    isLoading: boolean,
    currentPage: number;

}
export interface PaginationData {
    pageable: {
        sort: {
            empty: boolean;
            unsorted: boolean;
            sorted: boolean;
        };
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    };
    "totalPages": number,
}

export interface PaginationProps {
    data: PaginationData;
    currentPage: number;
    setCurrentPage: Function;
}