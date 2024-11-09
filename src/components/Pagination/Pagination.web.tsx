import * as React from 'react';
import {PaginationProps} from './Pagination.types';
import {Provider, DataTable as Table} from 'react-native-paper';
import theme from '../../constants/theme';

const Pagination: React.FC<PaginationProps> = ({
  page,
  numberOfItemsPerPageList,
  showFastPaginationControls = false,
  onPageChange,
  numberOfItems,
  onNumOfItemsChange,
  itemsPerPage,
}) => {
  const [pageState, setPageState] = React.useState<number>(page);
  const [numberOfItemsPerPageState, onItemsPerPageChangeState] =
    React.useState<number>(itemsPerPage);
  const isFirstRender = React.useRef(true);

  const from = pageState * numberOfItemsPerPageState;
  const to = Math.min(
    (pageState + 1) * numberOfItemsPerPageState,
    numberOfItems,
  );

  React.useEffect(() => {
    if (isFirstRender.current) {
      // Skip the first render
      isFirstRender.current = false;
      return;
    }

    // Only runs on subsequent changes to numberOfItemsPerPageState
    setPageState(0);
  }, [numberOfItemsPerPageState]);

  const onChange = e => {
    onItemsPerPageChangeState(e);
    if (onNumOfItemsChange) {
      onNumOfItemsChange(e);
    }
  };

  return (
    <Provider theme={theme}>
      <Table>
        <Table.Pagination
          page={pageState}
          numberOfPages={Math.ceil(numberOfItems / numberOfItemsPerPageState)}
          onPageChange={(p: number) => {
            setPageState(p);
            if (onPageChange) {
              onPageChange(p);
            }
          }}
          label={`Showing ${from + 1}-${to} of ${numberOfItems}`}
          showFastPaginationControls={showFastPaginationControls}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={numberOfItemsPerPageState}
          onItemsPerPageChange={onChange}
          selectPageDropdownLabel={'Rows per page'}
        />
      </Table>
    </Provider>
  );
};

export default Pagination;
