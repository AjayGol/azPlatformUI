import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './DataTable.styles';
import {DataTable as Table} from 'react-native-paper';
import {colors} from '../../constants/colors';
import CheckBoxTypeButton from '../CheckBoxTypeButton';
import {DataProps, DataTableProps} from './DataTable.types';

export const DataTable: React.FC<DataTableProps> = ({
  headers,
  data,
  renderCell,
  initialSortConfig,
  selectAllCallback,
  headerContainerStyle,
  headerStyle,
  alterBgHide,
  selectedRowId,
}) => {
  const [sortedData, setSortedData] = useState<DataProps[]>([]);
  const [selectedAllStatus, setselectedAllStatus] = useState<boolean>(false);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    ascending: boolean;
  }>(initialSortConfig || {key: '', ascending: true});

  useEffect(() => {
    handleSort(sortConfig.key, sortConfig.ascending);
    const allSelected = data?.every(item => item?.selected);
    setselectedAllStatus(allSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSort = (key: string, ascending: boolean = true) => {
    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return ascending ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });

    setSortedData(sorted);
    setSortConfig({key, ascending});
  };

  const toggleSort = (key: string) => {
    const ascending = sortConfig.key === key ? !sortConfig.ascending : true;
    handleSort(key, ascending);
  };

  const handleSelectAll = () => {
    const allSelected = data?.every(item => item?.selected);
    selectAllCallback(!allSelected);
  };

  return (
    <Table style={[styles.dtContainer, headerContainerStyle]}>
      <Table.Header style={[styles.dtHeader, headerStyle]}>
        {headers.map(header => (
          <Table.Title
            key={header.key}
            style={header.headerStyle}
            textStyle={[styles.textStyle1, header.textStyle]}
            sortDirection={
              sortConfig.key === header.key
                ? sortConfig.ascending
                  ? 'ascending'
                  : 'descending'
                : undefined
            }
            onPress={() => header.sortable && toggleSort(header.key)}>
            {header.key === 'checked' ? (
              <View style={header.headerStyle}>
                <CheckBoxTypeButton
                  borderWidth={0}
                  color={
                    selectedAllStatus ? colors.primaryColor : 'transparent'
                  }
                  status={selectedAllStatus ? 'checked' : 'unchecked'}
                  onPress={handleSelectAll}
                />
              </View>
            ) : (
              header.title
            )}
          </Table.Title>
        ))}
      </Table.Header>

      {sortedData.map((row, index) => (
        <Table.Row
          key={row?.id || index}
          style={[
            styles.dtRow,
            {zIndex: selectedRowId === row.id ? 1 : 0},
            !alterBgHide && {
              backgroundColor:
                index % 2 !== 0 ? colors.dtBackgroundColor : colors.white,

              borderBottomWidth: 0.5,
            },
          ]}>
          {headers.map(header => (
            <Table.Cell style={header.cellStyle} key={header.key}>
              {renderCell(row, header.key)}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table>
  );
};

// export default DataTable;
