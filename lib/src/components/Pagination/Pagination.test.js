import * as React from 'react';
import { render } from '@testing-library/react-native';
import { Pagination } from './Pagination.native';
describe('Pagination component', () => {
    const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    const numberOfItemsPerPageList = [10, 20, 30];
    it('renders data table pagination', () => {
        const tree = render(React.createElement(Pagination, { page: 3, items: items, numberOfItemsPerPageList: numberOfItemsPerPageList })).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders data table pagination with fast-forward buttons', () => {
        const { getByLabelText, toJSON } = render(React.createElement(Pagination, { page: 3, items: items, numberOfItemsPerPageList: numberOfItemsPerPageList, showFastPaginationControls: true }));
        expect(getByLabelText('page-first')).toBeTruthy();
        expect(getByLabelText('page-last')).toBeTruthy();
        expect(toJSON()).toMatchSnapshot();
    });
});
