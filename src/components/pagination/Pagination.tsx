import Button from "../button/Button";

type PaginationProps = {
  setCurrentPage: (number: number) => void;
  currentPage: number;
  pageSize?: number;
  totalPages: number;
};

export default function Pagination(props: PaginationProps) {
  const { setCurrentPage, currentPage, totalPages } = props;
  return (
    <div className="pagination-container">
      <Button
        disabled={currentPage === 0}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {`<`}
      </Button>
      <div>
        Page {currentPage + 1} of {totalPages + 1}
      </div>
      <Button
        disabled={currentPage >= totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {`>`}
      </Button>
    </div>
  );
}
