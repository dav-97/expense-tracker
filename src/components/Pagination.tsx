import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}: {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}) => {
  let pageNumbers = [];

  const lastPage = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= lastPage; i++) pageNumbers.push(i);

  pageNumbers = pageNumbers.filter((number) => {
    return (
      number === 1 ||
      number === currentPage - 1 ||
      number === currentPage ||
      number === currentPage + 1 ||
      number === lastPage
    );
  });

  return (
    <nav className="flex items-center justify-between px-4 border-t border-gray-200 sm:px-0">
      <div className="flex flex-1 w-0 -mt-px">
        {currentPage !== 1 && (
          <button
            onClick={() => paginate(currentPage - 1)}
            className="inline-flex items-center pt-2 pb-2 pr-1 mt-2 text-sm font-medium text-blue-300 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
          >
            <ArrowLongLeftIcon
              className="w-5 h-5 mr-3 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </button>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pageNumbers.map((number) => (
          <button
            onClick={() => paginate(number)}
            key={number}
            className={`${
              currentPage === number ? "bg-gray-500/75" : "bg-gray-500/20"
            } inline-flex rounded-md items-center px-4 mx-1 pt-2 mt-2 pb-2 text-sm font-medium text-blue-300 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500`}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex justify-end flex-1 w-0 -mt-px">
        {currentPage !== lastPage && (
          <button
            onClick={() => paginate(currentPage + 1)}
            className="inline-flex items-center pt-2 pb-2 pl-1 mt-2 text-sm font-medium text-blue-300 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
          >
            Next
            <ArrowLongRightIcon
              className="w-5 h-5 ml-3 text-gray-400"
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
