import React from "react";
import "../totalcss/Pagination.css";
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentPage, pageNumbers, goToNextPage, goToPrevPage } = this.props;
    return (
      <nav>
        <ul className="pagination-container">
          <li className="page-item">
            <a className="page-link" onClick={goToPrevPage} href="#">
              Previous
            </a>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item ${
                currentPage == pgNumber ? "active" : ""
              } `}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  this.props.handlePageChange(pgNumber);
                }}
                className="page-link"
                href="#"
              >
                {pgNumber}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={goToNextPage} href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}