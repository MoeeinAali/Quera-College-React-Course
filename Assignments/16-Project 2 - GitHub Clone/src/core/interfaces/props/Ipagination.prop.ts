interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    changePage: (pageNumber: number) => void;
}

export default IPaginationProps