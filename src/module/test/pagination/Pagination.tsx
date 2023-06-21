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
    const { totalPages } = data;

    //const for 2 of ellipsis:
    const ellipsis1 = <li key={"ellipsis1"}> <a className="page-link" href="#">...</a></li>
    const ellipsis2 = <li key={"ellipsis2"}> <a className="page-link" href="#">...</a></li>

    useEffect(()=>{
        console.log(currentPage)
    },[currentPage]);

    const handlePageChange = (pageNumber: number) => {
       setCurrentPage(pageNumber)
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        if(totalPages <= 7){
            // Render all page buttons if there are 7 or fewer pages
            for (let i = 0; i < totalPages; i++) {
                buttons.push(
                    <li key={i}
                        onClick={() => handlePageChange(i)}
                        className={`page-item ${i === currentPage ? 'active' : ''}`}>
                        <a className="page-link" href="#">{i + 1}</a>
                    </li>
                );
            }
        } else {
            // Render pagination with ellipsis
            if( currentPage < 4) {
                for (let i = 0; i < 5; i++) {
                    buttons.push(
                        <li key={i}
                            onClick={() => handlePageChange(i)}
                            className={`page-item ${i === currentPage ? 'active' : ''}`}>
                            <a className="page-link" href="#">{i + 1}</a>
                        </li>
                    );
                }
                // Elipsis
                buttons.push(ellipsis1)
                buttons.push(<li key={totalPages - 1}
                                 onClick={() => handlePageChange(totalPages - 1)}
                                 className={`page-item`}>
                    <a className="page-link" href="#">{totalPages - 1}</a>
                </li>)
            } else if ( currentPage >= 4 && currentPage <= totalPages - 5) {
                buttons.push(<li key={0}
                                 onClick={() => handlePageChange(0)}
                                 className={`page-item`}>
                        <a className="page-link" href="#">1</a>
                    </li>
                )
                buttons.push(ellipsis1)

                // Render current page and surrounding 3 pages
                for ( let i = currentPage - 2; i <= currentPage + 2; i++) {
                    buttons.push(<li key={i}
                                     onClick={() => handlePageChange(i)}
                                     className={`page-item ${i === currentPage ? 'active' : ''}`}>
                        <a className="page-link" href="#">{i + 1}</a>
                    </li>)
                }
                buttons.push(ellipsis2)
                buttons.push(<li key={totalPages - 1}
                                 onClick={() => handlePageChange(totalPages - 1)}
                                 className={`page-item`}>
                    <a className="page-link" href="#">{totalPages - 1}</a>
                </li>)
            } else {
                buttons.push(<li key={0}
                                 onClick={() => handlePageChange(0)}
                                 className={`page-item`}>
                    <a className="page-link" href="#">1</a>
                </li>)
                buttons.push(ellipsis1)

                // Render last 5 page buttons
                for (let i = totalPages - 5; i < totalPages; i++) {
                    buttons.push(<li key={i}
                                     onClick={() => handlePageChange(i)}
                                     className={`page-item ${i === currentPage ? 'active' : ''}`}>
                        <a className="page-link" href="#">{i + 1}</a>
                    </li>)
                }
            }

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
