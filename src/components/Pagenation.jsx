/* eslint-disable react/prop-types */
const Pagenation = ({ totalPages, currentPage, handlePagenation }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}
            onClick={() => handlePagenation(pageNumber)}
          >
            <a className="page-link" href="#">
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagenation;