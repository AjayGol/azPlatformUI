export interface PaginationProps {
    page?: number;
    numberOfItemsPerPageList?: number[];
    showFastPaginationControls?: boolean;
    onPageChange?: (p: number) => number;
    numberOfItems: number;
    onNumOfItemsChange?: (e: number) => void;
    position?: string;
    itemsPerPage: number;
}
