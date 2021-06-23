import React from "react";
import "./pagination.styles.scss";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const numberOfPages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    numberOfPages.push(i);
  }

  const handlePaginate = (number) => {
    paginate(number);
  };

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {numberOfPages.map((number) => {
          return (
            <li
              key={number}
              className="pagination__item"
              onClick={() => handlePaginate(number)}
            >
              <a className="pagination__link">{number}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
