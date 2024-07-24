export interface PaginationProps {
    itemsLimitPerPage: number,
    totalItemsCount: number,
    curPage: number,
    setCurPage: React.Dispatch<React.SetStateAction<number>>
}