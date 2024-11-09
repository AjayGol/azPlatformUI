import * as React from 'react';
import { Provider, DataTable as Table } from 'react-native-paper';
import theme from '../../constants/theme';
const Pagination = ({ page, numberOfItemsPerPageList, showFastPaginationControls = false, onPageChange, numberOfItems, onNumOfItemsChange, itemsPerPage, }) => {
    const [pageState, setPageState] = React.useState(page);
    const [numberOfItemsPerPageState, onItemsPerPageChangeState] = React.useState(itemsPerPage);
    const isFirstRender = React.useRef(true);
    const from = pageState * numberOfItemsPerPageState;
    const to = Math.min((pageState + 1) * numberOfItemsPerPageState, numberOfItems);
    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setPageState(0);
    }, [numberOfItemsPerPageState]);
    const onChange = e => {
        onItemsPerPageChangeState(e);
        if (onNumOfItemsChange) {
            onNumOfItemsChange(e);
        }
    };
    return (React.createElement(Provider, { theme: theme },
        React.createElement(Table, null,
            React.createElement(Table.Pagination, { page: pageState, numberOfPages: Math.ceil(numberOfItems / numberOfItemsPerPageState), onPageChange: (p) => {
                    setPageState(p);
                    if (onPageChange) {
                        onPageChange(p);
                    }
                }, label: `Showing ${from + 1}-${to} of ${numberOfItems}`, showFastPaginationControls: showFastPaginationControls, numberOfItemsPerPageList: numberOfItemsPerPageList, numberOfItemsPerPage: numberOfItemsPerPageState, onItemsPerPageChange: onChange, selectPageDropdownLabel: 'Rows per page' }))));
};
export default Pagination;
