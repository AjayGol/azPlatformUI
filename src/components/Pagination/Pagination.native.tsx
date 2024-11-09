import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Provider, DataTable as Table, Menu} from 'react-native-paper';
import theme from '../../constants/theme';
import Icon from '../../common/Icon';
import {colors} from '../../constants/colors';
import {
  HELVETICA_NEUE_BOLD,
  HELVETICA_NEUE_MEDIUM,
  HELVETICA_NEUE_REGULAR,
} from '../../assets/Fonts';

const Pagination = ({
  page,
  numberOfItemsPerPageList,
  showFastPaginationControls = false,
  onPageChange,
  numberOfItems,
  onNumOfItemsChange,
  position = 'bottom',
}) => {
  const [pageState, setPageState] = React.useState<number>(page);
  const [numberOfItemsPerPageState, setItemsPerPageState] =
    React.useState<number>(numberOfItemsPerPageList[0]);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [menuHeight, setMenuHeight] = React.useState(0);
  const [btnHeight, setBtnHeight] = React.useState(0);
  const isFirstRender = React.useRef(true);
  const menuRef = React.useRef(null);

  const from = pageState * numberOfItemsPerPageState;
  const to = Math.min(
    (pageState + 1) * numberOfItemsPerPageState,
    numberOfItems,
  );

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setPageState(0);
  }, [numberOfItemsPerPageState]);

  const onChangeItemsPerPage = newPerPage => {
    setItemsPerPageState(newPerPage);
    setMenuVisible(false);
    if (onNumOfItemsChange) {
      onNumOfItemsChange(newPerPage);
    }
  };

  const handleOutsidePress = () => {
    if (menuVisible) {
      setMenuVisible(false);
    }
  };

  const handleMenuLayout = event => {
    const {height} = event.nativeEvent.layout;
    setMenuHeight(height);
  };
  const handleButtonLayout = event => {
    const {height} = event.nativeEvent.layout;
    setBtnHeight(height);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.viewStyle}>
        <Provider theme={theme}>
          <Table style={styles.mainTable}>
            <View style={styles.tableStyle}>
              <Text style={styles.rows}>Rows per page</Text>
              <TouchableOpacity
                onLayout={handleButtonLayout}
                onPress={() => setMenuVisible(!menuVisible)}
                style={styles.button}>
                <Text style={styles.numberPerPage}>
                  {numberOfItemsPerPageState}
                </Text>
                <Icon
                  style={styles.menuIcon}
                  size={9}
                  color={colors.primaryColor}
                  name="caret-down"
                  lib="Fontisto"
                />
              </TouchableOpacity>

              {menuVisible && (
                <View
                  ref={menuRef}
                  onLayout={handleMenuLayout}
                  style={{
                    ...styles.menuContainer,
                    top: position === 'top' ? 0 : -(menuHeight - btnHeight),
                  }}>
                  {numberOfItemsPerPageList.map((item, index) => (
                    <Menu.Item
                      key={index}
                      titleStyle={styles.titleStyle}
                      contentStyle={{backgroundColor: colors.menuBgColor}}
                      onPress={() => onChangeItemsPerPage(item)}
                      title={`${item}`}
                      style={{
                        ...styles.menuItem,
                        borderTopLeftRadius: index === 0 ? 10 : 0,
                        borderTopRightRadius: index === 0 ? 10 : 0,
                        borderBottomLeftRadius:
                          index === numberOfItemsPerPageList?.length - 1
                            ? 10
                            : 0,
                        borderBottomRightRadius:
                          index === numberOfItemsPerPageList?.length - 1
                            ? 10
                            : 0,
                      }}
                    />
                  ))}
                </View>
              )}
            </View>

            <Table.Pagination
              page={pageState}
              style={{zIndex: -1}}
              numberOfPages={Math.ceil(
                numberOfItems / numberOfItemsPerPageState,
              )}
              onPageChange={(p: number) => {
                setPageState(p);
                if (onPageChange) {
                  onPageChange(p);
                }
              }}
              label={`Showing ${from + 1}-${to} of ${numberOfItems}`}
              showFastPaginationControls={showFastPaginationControls}
              onItemsPerPageChange={onChangeItemsPerPage}
            />
          </Table>
        </Provider>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    left: 187,
    zIndex: 1000,
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: colors.menuBgColor,
  },
  rows: {
    fontFamily: HELVETICA_NEUE_REGULAR,
    color: colors.textColor,
    fontSize: 14,
    marginRight: 15,
  },
  viewStyle: {
    flex: 1,
  },
  mainTable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tableStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: colors.textColor,
  },
  menuIcon: {
    marginLeft: 15,
    marginTop: 4.5,
  },
  numberPerPage: {
    fontFamily: HELVETICA_NEUE_MEDIUM,
    color: colors.textColor,
    fontSize: 16,
  },
  titleStyle: {
    backgroundColor: colors.menuBgColor,
    fontFamily: HELVETICA_NEUE_BOLD,
    color: colors.primaryColor,
    fontSize: 20,
  },
  menuItem: {
    backgroundColor: colors.menuBgColor,
  },
});

export default Pagination;
