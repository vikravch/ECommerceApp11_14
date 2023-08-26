
export interface PaginationStore{
    data: PaginationData;
    isLoading: boolean,
    currentPage: number;

}

export interface PaginationData {
    last: boolean,
    totalElements: number,
    totalPages: number,
    size: number,
    number: number,
    sort: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
    },
    first: boolean,
    numberOfElements: number,
    empty: boolean
}

export interface PaginationProps {
    data: PaginationData;
    currentPage: number;
    setCurrentPage: Function;
}
