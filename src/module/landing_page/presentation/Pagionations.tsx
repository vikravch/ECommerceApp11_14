import React from 'react';

const Pagionations = () => {
    return (    <nav>
        <ul className="pagination justify-content-center my-5">
            <li className="page-item "><a className="page-link" href="#"><span>&laquo;</span></a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item "><a className="page-link" href="#">3</a></li>
            <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
            <li className="page-item"><a className="page-link" href="#">20</a></li>
            <li className="page-item"><a className="page-link" href="#"><span>&raquo;</span></a></li>
        </ul>
    </nav>  );
};

export default Pagionations;