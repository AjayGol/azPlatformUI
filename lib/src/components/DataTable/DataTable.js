import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { styles } from './DataTable.styles';
import { DataTable as Table } from 'react-native-paper';
import { colors } from '../../constants/colors';
import CheckBoxTypeButton from '../CheckBoxTypeButton';
export const DataTable = ({ headers, data, renderCell, initialSortConfig, selectAllCallback, headerContainerStyle, headerStyle, alterBgHide, selectedRowId, }) => {
    const [sortedData, setSortedData] = useState([]);
    const [selectedAllStatus, setselectedAllStatus] = useState(false);
    const [sortConfig, setSortConfig] = useState(initialSortConfig || { key: '', ascending: true });
    useEffect(() => {
        handleSort(sortConfig.key, sortConfig.ascending);
        const allSelected = data === null || data === void 0 ? void 0 : data.every(item => item === null || item === void 0 ? void 0 : item.selected);
        setselectedAllStatus(allSelected);
    }, [data]);
    const handleSort = (key, ascending = true) => {
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
        setSortConfig({ key, ascending });
    };
    const toggleSort = (key) => {
        const ascending = sortConfig.key === key ? !sortConfig.ascending : true;
        handleSort(key, ascending);
    };
    const handleSelectAll = () => {
        const allSelected = data === null || data === void 0 ? void 0 : data.every(item => item === null || item === void 0 ? void 0 : item.selected);
        selectAllCallback(!allSelected);
    };
    return (React.createElement(Table, { style: [styles.dtContainer, headerContainerStyle] },
        React.createElement(Table.Header, { style: [styles.dtHeader, headerStyle] }, headers.map(header => (React.createElement(Table.Title, { key: header.key, style: header.headerStyle, textStyle: [styles.textStyle1, header.textStyle], sortDirection: sortConfig.key === header.key
                ? sortConfig.ascending
                    ? 'ascending'
                    : 'descending'
                : undefined, onPress: () => header.sortable && toggleSort(header.key) }, header.key === 'checked' ? (React.createElement(View, { style: header.headerStyle },
            React.createElement(CheckBoxTypeButton, { borderWidth: 0, color: selectedAllStatus ? colors.primaryColor : 'transparent', status: selectedAllStatus ? 'checked' : 'unchecked', onPress: handleSelectAll }))) : (header.title))))),
        sortedData.map((row, index) => (React.createElement(Table.Row, { key: (row === null || row === void 0 ? void 0 : row.id) || index, style: [
                styles.dtRow,
                { zIndex: selectedRowId === row.id ? 1 : 0 },
                !alterBgHide && {
                    backgroundColor: index % 2 !== 0 ? colors.dtBackgroundColor : colors.white,
                    borderBottomWidth: 0.5,
                },
            ] }, headers.map(header => (React.createElement(Table.Cell, { style: header.cellStyle, key: header.key }, renderCell(row, header.key)))))))));
};
