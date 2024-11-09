import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TextInput, } from 'react-native';
import Pdf from 'react-native-pdf';
import Carousel from 'react-native-reanimated-carousel';
import Icon from '../../../src/common/Icon';
import { colors } from '../../../src/constants/colors';
import { screenWidth } from '../../../src/constants/constant';
const FileViewer = ({ url, presentationClick, containerStyle, onLoadProgress, loadComplete, onPageChanged, onError, onErrorList, onPageSingleTap, onScaleChanged, onExternalLinkClicked, onClickOpenClose, }) => {
    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [currPage, setCurrPage] = useState(1);
    const [inputValue, setInputValue] = useState('1');
    const [isSwiperVisible, setIsSwiperVisible] = useState(false);
    const [scale, setScale] = useState(1);
    const carouselRef = useRef(null);
    const [swipeDot, setSwipeDot] = useState(0);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(screenWidth);
    const [swiperHeight, setSwiperHeight] = useState(200);
    const handlePageNumberChange = value => {
        var _a;
        setInputValue(value);
        if (value === '') {
            return;
        }
        const newPageNumber = parseInt(value, 10);
        if (!isNaN(newPageNumber) &&
            newPageNumber >= 1 &&
            newPageNumber <= totalPages) {
            setPageNumber(newPageNumber);
            setCurrPage(newPageNumber);
            const newIndex = Math.floor((newPageNumber - 1) / 5);
            (_a = carouselRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ index: newIndex, animated: true });
        }
        else {
            setInputValue(pageNumber.toString());
        }
    };
    const handleInputBlur = () => {
        if (inputValue === '') {
            setInputValue(pageNumber.toString());
        }
    };
    const handleOpen = () => {
        if (totalPages > 0) {
            onClickOpenClose(true);
            setIsSwiperVisible(true);
            const newIndex = Math.floor((pageNumber - 1) / 5);
            setTimeout(() => {
                var _a;
                (_a = carouselRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ index: newIndex, animated: true });
            }, 1000);
        }
    };
    const handleClose = () => {
        setIsSwiperVisible(false);
        onClickOpenClose(false);
    };
    const handleLayout = event => {
        const { width, height } = event.nativeEvent.layout;
        setContainerWidth(width);
        setSwiperHeight(height);
    };
    const PaginationDots = ({ totalPages, swipeDot, onDotPress }) => {
        const totalDots = Math.ceil(totalPages / 5);
        return (React.createElement(View, { style: styles.customPagination }, Array.from({ length: totalDots }).map((_, index) => (React.createElement(TouchableOpacity, { key: index, onPress: () => onDotPress(index), style: [
                styles.paginationDot,
                {
                    borderWidth: index === swipeDot ? 0 : 1.5,
                    backgroundColor: index === swipeDot ? colors.textColor : colors.white,
                },
            ] })))));
    };
    const handleDotPress = index => {
        var _a;
        const newPageNumber = index * 5 + 1;
        setPageNumber(newPageNumber);
        setInputValue(newPageNumber.toString());
        setSwipeDot(index);
        (_a = carouselRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ index: index, animated: true });
    };
    const onLoadComplete = (numberOfPages, path, size, tableContents) => {
        setTotalPages(numberOfPages);
        loadComplete(numberOfPages, path, size, tableContents);
    };
    const onPageScroll = (page, numberOfPages) => {
        var _a;
        setInputValue(page.toString());
        onPageChanged(page, numberOfPages);
        setCurrPage(page);
        setPageNumber(page);
        const newIndex = Math.floor((page - 1) / 5);
        (_a = carouselRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ index: newIndex, animated: true });
    };
    const onPressLink = (url) => {
        onExternalLinkClicked(url, pageNumber);
    };
    const [zoomInputValue, setZoomInputValue] = useState('100');
    const handleZoomIn = () => {
        setScale(prevScale => {
            const newScale = Math.min(prevScale + 0.1, 3.0);
            setZoomInputValue(Math.round(newScale * 100).toString());
            return newScale;
        });
    };
    const handleZoomOut = () => {
        setScale(prevScale => {
            const newScale = Math.max(prevScale - 0.1, 0.5);
            setZoomInputValue(Math.round(newScale * 100).toString());
            return newScale;
        });
    };
    const timeoutRef = useRef(null);
    const handleZoomChange = text => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setZoomInputValue(text);
        timeoutRef.current = setTimeout(() => {
            const parsedValue = parseFloat(text);
            if (!isNaN(parsedValue)) {
                if (parsedValue < 50) {
                    setScale(0.5);
                    setZoomInputValue('50');
                }
                else if (parsedValue > 300) {
                    setScale(3.0);
                    setZoomInputValue('300');
                }
                else {
                    setScale(parsedValue / 100);
                    setZoomInputValue(text);
                }
            }
        }, 1000);
    };
    return (React.createElement(View, { ref: containerRef, onLayout: handleLayout, style: styles.container },
        React.createElement(View, { style: styles.header },
            React.createElement(View, { style: Object.assign(Object.assign({}, styles.textView), { marginRight: 10 }) },
                React.createElement(TextInput, { style: Object.assign({}, styles.zoomInput), value: inputValue, onChangeText: handlePageNumberChange, keyboardType: "numeric", onBlur: handleInputBlur })),
            React.createElement(Text, { style: styles.headerText },
                "of ",
                totalPages),
            React.createElement(View, { style: styles.zoomControls },
                React.createElement(Icon, { lib: "MaterialCommunityIcons", name: "minus", color: colors.black, onPressIcon: handleZoomOut, size: 20 }),
                React.createElement(View, { style: Object.assign(Object.assign({}, styles.textView), { marginHorizontal: 5 }) },
                    React.createElement(TextInput, { style: styles.zoomInput, value: zoomInputValue, onChangeText: handleZoomChange, keyboardType: "numeric" }),
                    React.createElement(Text, { style: { fontSize: 15 } }, "%")),
                React.createElement(Icon, { lib: "MaterialCommunityIcons", name: "plus", color: colors.black, onPressIcon: handleZoomIn, size: 20 }))),
        React.createElement(View, { style: [styles.pdfContainer, containerStyle] },
            React.createElement(Pdf, { source: { uri: url, cache: true }, page: pageNumber, scale: scale, enablePaging: true, onLoadProgress: onLoadProgress, onPageSingleTap: onPageSingleTap, onScaleChanged: onScaleChanged, trustAllCerts: false, enableAnnotationRendering: true, onPressLink: onPressLink, onPageChanged: onPageScroll, onError: onError, showsHorizontalScrollIndicator: false, onLoadComplete: onLoadComplete, style: [styles.pdf, containerStyle] })),
        isSwiperVisible && (React.createElement(React.Fragment, null,
            React.createElement(View, { style: Object.assign(Object.assign({}, styles.swiperContainer), containerStyle) },
                React.createElement(View, { style: styles.swiperButtons },
                    React.createElement(TouchableOpacity, { onPress: handleClose },
                        React.createElement(Text, { style: styles.buttonTextStyle }, "Close")),
                    React.createElement(TouchableOpacity, { onPress: presentationClick },
                        React.createElement(Text, { style: styles.buttonTextStyle }, "Select Presentations"))),
                React.createElement(Carousel, { ref: carouselRef, loop: false, style: { height: swiperHeight * 0.22 }, renderItem: ({ index }) => {
                        const itemsCount = Math.min(5, totalPages - index * 5);
                        const justifyContentStyle = itemsCount <= 2 ? 'flex-start' : 'space-between';
                        const itemMargin = itemsCount <= 2 ? 8 : 0;
                        return (React.createElement(View, { key: index, style: Object.assign(Object.assign({}, styles.swiperSlideContainer), { justifyContent: justifyContentStyle, height: swiperHeight * 0.22 }) }, Array.from({ length: 5 }).map((_, pageIndex) => {
                            const pageNumber = index * 5 + (pageIndex + 1);
                            if (pageNumber <= totalPages) {
                                return (React.createElement(TouchableOpacity, { key: `page-${index}-${pageIndex}`, style: Object.assign(Object.assign({}, styles.swiperSlide), { width: containerWidth / 5 - 20, height: '100%', marginHorizontal: itemMargin, borderWidth: pageNumber === currPage ? 2 : 0 }), onPress: () => {
                                        setCurrPage(pageNumber);
                                        setPageNumber(pageNumber);
                                        setInputValue(pageNumber.toString());
                                    } },
                                    React.createElement(View, { style: styles.slideIndexOverlay },
                                        React.createElement(Text, { style: styles.textStyle }, pageNumber)),
                                    React.createElement(View, { style: styles.swiperPdf },
                                        React.createElement(Pdf, { source: { uri: url, cache: true }, page: pageNumber, trustAllCerts: false, onError: onErrorList, enableDoubleTapZoom: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, horizontal: true, scale: 1, style: Object.assign(Object.assign({}, styles.pdfPage), { width: containerWidth / 5 - 25 }) }))));
                            }
                            return null;
                        })));
                    }, width: containerWidth, height: swiperHeight * 0.2, autoPlay: false, data: Array.from({ length: Math.ceil(totalPages / 5) }), scrollAnimationDuration: 300, onSnapToItem: index => {
                        setSwipeDot(index);
                    } }),
                React.createElement(PaginationDots, { totalPages: totalPages, swipeDot: swipeDot, onDotPress: handleDotPress })))),
        !isSwiperVisible && (React.createElement(TouchableOpacity, { style: styles.openButton, onPress: handleOpen },
            React.createElement(Icon, { lib: "Foundation", name: "page-multiple", size: 35, color: colors.textColor })))));
};
const styles = StyleSheet.create({
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    textStyle: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Helvetica',
    },
    slideIndexOverlay: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 5,
        zIndex: 10,
        fontSize: 14,
        textAlign: 'center',
    },
    swiperSlideContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    headerText: {
        color: colors.black,
        fontSize: 15,
    },
    swiperButtons: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    customPagination: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center',
    },
    paginationDot: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        margin: 5,
    },
    buttonTextStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.primaryColor,
    },
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        padding: 10,
    },
    zoomControls: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    zoomInput: Object.assign(Object.assign({ paddingVertical: 0, paddingHorizontal: 8 }, (Platform.OS === 'android' && {
        paddingBottom: 0,
    })), { fontSize: 15, height: 30, borderBottomColor: 'transparent', backgroundColor: 'transparent', textAlignVertical: 'center', textAlign: 'center' }),
    pdfContainer: {
        flex: 1,
    },
    pdf: {
        flex: 1,
    },
    swiperContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    swiperSlide: {
        borderColor: colors.primaryColor,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    openButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    pdfPage: {
        height: '100%',
        borderRadius: 7,
    },
    swiperPdf: {
        height: '100%',
        pointerEvents: 'none',
        borderRadius: 10,
    },
});
export default FileViewer;
