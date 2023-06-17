import React from "react";
import { Nav } from "react-bootstrap";

interface propType {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
  onPageChange: any;
}

const Pagination: React.FC<propType> = ({ currentPage, postsPerPage, totalPosts, onPageChange }) => {

  const pageNumbers = []; // Sehife nomrelerini tutacaq bir array
  // sehife nomrelerini arraya elave etmek ucun loop
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-block">
      <ul className="pagination">
        <li
          className={`page-item ${currentPage === 1 ? "disabled" : ""
            }`}
        >
          <Nav.Link
            onClick={() => onPageChange(currentPage - 1)}
            className="page-link"
          >
            <i className="fa-solid fa-angle-left"></i>
          </Nav.Link>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Nav.Link
              className={
                number === currentPage ? "page-link active" : "page-link"
              }
              onClick={() => onPageChange(number)}
            >
              {number}
            </Nav.Link>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === pageNumbers.length ? "disabled" : ""
            }`}
        >
          <Nav.Link
            onClick={() => onPageChange(currentPage + 1)}
            className="page-link"
          >
            <i className="fa-solid fa-angle-right"></i>
          </Nav.Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;