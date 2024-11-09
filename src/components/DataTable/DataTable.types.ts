import {ViewStyle} from 'react-native';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface TableHeader {
  key: string;
  title: string;
  sortable?: boolean;
  headerStyle?: object;
  textStyle?: object;
  cellStyle?: object;
}

export interface DataProps {
  id: string | number;
  checked: boolean;
  title: string;
  mediaImage: string;
  type: string;
  language: string;
  filetype: string;
  favorites: boolean;
  selected: boolean;
}

export interface RowProps {
  row: object;
  columnKey: string;
  minWidth: number;
  checked?: boolean;
  id: string | number;
  mediaImage: string;
  title: string;
  filetype: string;
  favorites: boolean;
  selected?: boolean;
}

export interface DataTableProps {
  headers: TableHeader[];
  data: DataProps[];
  headerStyle?: ViewStyle;
  headerContainerStyle?: ViewStyle;
  alterBgHide: boolean;
  renderCell: (row: any, columnKey: string) => React.ReactNode;
  initialSortConfig?: {key: string; ascending: boolean};
  selectAllCallback?: (status: boolean) => void;
  selectedRowId?: number | any;
}
