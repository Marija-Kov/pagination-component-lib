export interface PaginationProps {
    itemsLimitPerPage: number,
    totalItemsCount: number,
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}