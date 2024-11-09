import type {Meta, StoryObj} from '@storybook/react';
import Pagination from '../../components/Pagination';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';

const meta = {
  title: 'components/Pagination',
  component: Pagination,
  decorators: [withTests({results})],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PaginationComponent: Story = {
  args: {
    page: 2,
    numberOfItems: 100,
    numberOfItemsPerPageList: [2, 3, 4],
    showFastPaginationControls: true,
    onNumOfItemsChange: e => {
      console.log(e);
    },
    itemsPerPage: 2,
  },
};
