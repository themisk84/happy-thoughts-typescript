import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PaginationButton = styled.button`
  margin-right: 3px;
  box-shadow: 5px 5px black;
  background: #f2f2f2;
  border: 1px solid black;
`;

interface PaginationProps {
  page: number;
  perPage: number | string;
  setPerPage: React.Dispatch<React.SetStateAction<number | string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  perPage,
  setPerPage,
  setPage,
  page,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <div>
        <label htmlFor="pagination">Results per page</label>
        <select
          id="pagination"
          value={perPage}
          onChange={(event) => setPerPage(event.target.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div>
        {page !== 1 && (
          <PaginationButton onClick={() => setPage(page - 1)}>
            Previous page
          </PaginationButton>
        )}
        <PaginationButton onClick={() => setPage(page + 1)}>
          Next page
        </PaginationButton>
      </div>
    </PaginationContainer>
  );
};

export default Pagination;
