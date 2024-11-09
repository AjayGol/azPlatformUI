import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {DataTable} from './DataTable';
import {Checkbox} from 'react-native-paper';
const headers = [
  {key: 'checked', title: '', sortable: false},
  {key: 'name', title: 'Name', sortable: true},
  {key: 'age', title: 'Age', sortable: true},
];

const data = [
  {id: 1, name: 'John', age: 25, checked: false},
  {id: 2, name: 'Alice', age: 30, checked: false},
  {id: 3, name: 'Bob', age: 28, checked: false},
];

const renderCell = (row, key) => {
  if (key === 'checked') {
    return <Checkbox status={row.checked ? 'checked' : 'unchecked'} />;
  }
  return row[key];
};

const selectAllCallback = jest.fn();

describe('DataTable component', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <DataTable
        headers={headers}
        data={data}
        renderCell={renderCell}
        initialSortConfig={{key: 'name', ascending: true}}
        selectAllCallback={selectAllCallback}
      />,
    );
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Age')).toBeTruthy();
    expect(getByText('John')).toBeTruthy();
    expect(getByText('Alice')).toBeTruthy();
    expect(getByText('Bob')).toBeTruthy();
  });

  it('sorts data by column', () => {
    const {getByText} = render(
      <DataTable
        headers={headers}
        data={data}
        renderCell={renderCell}
        initialSortConfig={{key: 'name', ascending: true}}
        selectAllCallback={selectAllCallback}
      />,
    );
    fireEvent.press(getByText('Age'));
    expect(getByText('25')).toBeTruthy();
    expect(getByText('28')).toBeTruthy();
    expect(getByText('30')).toBeTruthy();
  });

  it('toggles select all checkbox', () => {
    const {getByLabelText} = render(
      <DataTable
        headers={headers}
        data={data}
        renderCell={renderCell}
        initialSortConfig={{key: 'name', ascending: true}}
        selectAllCallback={selectAllCallback}
      />,
    );
    fireEvent.press(getByLabelText(''));
    expect(selectAllCallback).toHaveBeenCalledTimes(1);
  });
});
