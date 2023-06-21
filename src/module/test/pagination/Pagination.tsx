import React, {useEffect, useState} from "react";

interface PaginationData {
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

interface PaginationProps {
    data: PaginationData;
}


const Pagination: React.FC<PaginationProps> = ({ data}) => {
    const [currentPage, setCurrentPage] = useState(0)
    const { totalPages } = data;

    //const for 2 of ellipsis:
    const ellipsis1 = <li key={"ellipsis1"}> <a className="page-link" href="#">...</a></li>
    const ellipsis2 = <li key={"ellipsis2"}> <a className="page-link" href="#">...</a></li>
    const firstBtn = <li key={0}
                         onClick={() => handlePageChange(0)}
                         className={`page-item`}>
        <a className="page-link" href="#">1</a>
    </li>
    const lastBtn = <li key={totalPages - 1}
                        onClick={() => handlePageChange(totalPages - 1)}
                        className={`page-item`}>
        <a className="page-link" href="#">{totalPages}</a>
    </li>

    useEffect(()=>{
        console.log(currentPage)
    },[currentPage]);

    const handlePageChange = (pageNumber: number) => {
       setCurrentPage(pageNumber)
    };
    const handlePrevBtnClick = (pageNumber: number) => {
        setCurrentPage(pageNumber - 1)
    }
    const handleNextBtnClick = (pageNumber: number) => {
        setCurrentPage(pageNumber + 1)
    }

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
        }
        else {
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
                buttons.push(lastBtn)
            }
            else if ( currentPage >= 4 && currentPage <= totalPages - 5) {
                buttons.push(firstBtn)
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
                buttons.push(lastBtn)
            }
            else {
                buttons.push(firstBtn)
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
        console.log(buttons)
        return buttons;
    };

    return (
        <div>
            <nav>
                <ul className="pagination justify-content-center my-5">
                    <li className="page-item "><a className="page-link" href="#" onClick={() => handlePrevBtnClick(currentPage)}><span>&laquo;</span></a></li>
                    {renderPaginationButtons()}
                    <li className="page-item"><a className="page-link" href="#" onClick={() => handleNextBtnClick(currentPage)}><span>&raquo;</span></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
