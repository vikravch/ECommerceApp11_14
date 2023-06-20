import React, {useEffect, useState} from "react";
import {getProductDetailsAction} from "../../landing_page/redux/asyncActions";
import getProductDetails from "../../landing_page/domain/use_case/getProductDetails";

interface Product {
    discount: string;
    idProduct: string;
    rating: string;
    price: string;
    product_thumb: string;
    product_title: string;
}

interface PaginationData {
    content: Product[];
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
    last: boolean;
    totalPages: number;
    totalElements: number;
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
}

interface PaginationProps {
    data: PaginationData;
    onPageChange: (pageNumber: number) => void;
}


const Pagination: React.FC<PaginationProps> = ({ data, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const { totalPages, number } = data;

    useEffect(()=>{
        console.log(currentPage)
    },[currentPage]);

    const handlePageChange = (pageNumber: number) => {
        // console.log(pageNumber)
       setCurrentPage(pageNumber)
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 0; i < totalPages; i++) {
            buttons.push(
                <li key={i}
                    onClick={() => handlePageChange(i)} className={`page-item ${i === currentPage ? 'active' : ''}`}><a className="page-link" href="#">{i + 1}</a></li>
            );
        }
        return buttons;
    };



    return (
        <div>
            <nav>
                <ul className="pagination justify-content-center my-5">
                    <li className="page-item "><a className="page-link" href="#"><span>&laquo;</span></a></li>
                    <div>{renderPaginationButtons()}</div>
                    <li className="page-item"><a className="page-link" href="#"><span>&raquo;</span></a></li>
                </ul>
            </nav>
            <div>
                <p>
                    Showing page {currentPage + 1} of {totalPages}
                </p>
            </div>
        </div>
    );
};

export default Pagination;
