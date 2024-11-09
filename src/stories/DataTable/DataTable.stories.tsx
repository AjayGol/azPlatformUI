import React from 'react';
import type {Meta} from '@storybook/react';

import Table from '../../components/DataTable';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import {Checkbox, Icon, TouchableRipple} from 'react-native-paper';
import {View, Text, Image} from 'react-native';
import {useState} from 'react';
import {RowProps} from '../../components/DataTable/DataTable.types';
import {colors} from '../../constants/colors';

const meta: Meta<typeof Table> = {
  title: 'components/DataTable',
  component: Table,
  decorators: [withTests({results})],
} satisfies Meta<typeof Table>;

export default meta;

const Template = () => {
  const [data, setData] = useState([
    {
      id: '1',
      selected: true,
      title: 'Breast Cancer Advanced Stage',
      mediaImage: './Images/dna.png',
      type: 'Breast Cancer',
      language: 'English',
      filetype: './Images/office.png',
      favorites: true,
    },
    {
      id: '2',
      selected: true,
      title: 'Breast Cancer Advanced Stage',
      mediaImage: './Images/dna.png',
      type: 'Breast Cancer',
      language: 'English',
      filetype: './Images/office.png',
      favorites: true,
    },
    {
      id: '3',
      title: 'Breast Cancer Advanced Stage',
      mediaImage: './Images/dna.png',
      type: 'Breast Cancer',
      language: 'English',
      filetype: './Images/office.png',
      favorites: true,
      selected: true,
    },
    {
      id: '4',
      checked: false,
      selected: true,
      title:
        'Breast Cancer Advanced Stage Breast Cancer Advanced Stage Breast Cancer Advanced Stage',
      mediaImage: './Images/dna.png',
      type: 'Breast Cancer',
      language: 'English',
      filetype: './Images/office.png',
      favorites: false,
    },
  ]);

  const headers = [
    {
      key: 'checked',
      title: 'Check',
      sortable: false,
      headerStyle: {
        maxWidth: 80,
        paddingTop: 7.5,
        alignItems: 'center',
        justifyContent: 'center',
      },

      cellStyle: {
        maxWidth: 80,
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    {
      key: 'media',
      title: 'Media',
      sortable: true,
      headerStyle: {
        minWidth: 300,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cellStyle: {
        minWidth: 300,
        marginRight: 10,
      },
    },
    {
      key: 'type',
      title: 'Type',
      sortable: true,
      headerStyle: {},
      cellStyle: {},
    },
    {
      key: 'language',
      title: 'Language',
      sortable: true,
      headerStyle: {},
      cellStyle: {},
    },
    {
      key: 'filetype',
      title: 'File Type',
      sortable: true,
      headerStyle: {},
      cellStyle: {},
    },
    {
      key: 'favorites',
      title: 'Favorites',
      sortable: true,
      headerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      cellStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  ];

  const textFont = {fontSize: 12, color: '#4f575d'};

  const renderCell = (row: RowProps, columnKey: string) => {
    switch (columnKey) {
      case 'checked':
        return (
          <View style={{minWidth: row.minWidth}}>
            <Checkbox.Item
              label=""
              style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
              status={row?.selected ? 'checked' : 'unchecked'}
              onPress={() => {
                const newData = data.map(item =>
                  item.id === row.id
                    ? {...item, selected: !item.selected}
                    : item,
                );
                setData(newData);
              }}
            />
          </View>
        );
      case 'media':
        return (
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            {row.mediaImage && (
              <Image
                source={{uri: row.mediaImage}}
                resizeMode="cover"
                style={{width: 80, height: 60, margin: 10, borderRadius: 10}}
              />
            )}
            <Text
              numberOfLines={1}
              style={[{flex: 1, flexWrap: 'wrap'}, textFont]}>
              {row.title}
            </Text>
          </View>
        );
      case 'favorites':
        return row.favorites ? (
          <TouchableRipple
            onPress={() => {
              const newData = data.map(item => {
                if (row.id === item.id) {
                  return {
                    ...item,
                    favorites: !row.favorites,
                  };
                }
                return item;
              });
              setData(newData);
            }}
            rippleColor="rgba(0, 0, 0, .32)">
            <Icon source="heart" color={colors.secondaryColor} size={25} />
          </TouchableRipple>
        ) : (
          <TouchableRipple
            onPress={() => {
              const newData = data.map(item => {
                if (row.id === item.id) {
                  return {
                    ...item,
                    favorites: !row.favorites,
                  };
                }
                return item;
              });
              setData(newData);
            }}
            rippleColor="rgba(0, 0, 0, .32)">
            <Icon
              source="heart-outline"
              color={colors.primaryColor}
              size={25}
            />
          </TouchableRipple>
        );
      case 'filetype':
        return row.filetype ? (
          <Image source={{uri: row.filetype}} style={{width: 25, height: 25}} />
        ) : null;
      default:
        return <Text style={textFont}>{row[columnKey]}</Text>;
    }
  };

  return (
    <Table
      headers={headers}
      data={data}
      renderCell={renderCell}
      initialSortConfig={{key: 'title', ascending: true}}
      selectAllCallback={val => {
        const newData = data.map(item => {
          return {...item, selected: val};
        });
        setData(newData);
      }}
    />
  );
};

export const DataTable = Template.bind({});
