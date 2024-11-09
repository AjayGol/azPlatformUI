import React, { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../../styles/FileViewer.styles.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Icon from '../../../src/common/Icon';
import { colors } from '../../../src/constants/colors';
import { StyleSheet, Text } from 'react-native';
pdfjs.GlobalWorkerOptions.workerSrc =
    'https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js';
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
};
const FileViewer = ({ url, presentationClick, containerStyle, onLoadErrorWeb, onLoadErrorListWeb, onInternalLinkClicked, onExternalLinkClicked, docClassName, onLoadSuccess, onPageChanged, onLoadSuccessList, onErrorText, loading, noData, onPassword, rotate, onErrorTextList, loadingList, noDataList, resetPage, }) => {
    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [inputValue, setInputValue] = useState('1');
    const [zoomInputValue, setZoomInputValue] = useState('100');
    const [isSwiperVisible, setIsSwiperVisible] = useState(false);
    const [containerDimensions, setContainerDimensions] = useState({
        width: 0,
        height: 0,
    });
    const [swiperDimensions, setSwiperDimensions] = useState({
        width: 0,
        height: 0,
    });
    const [pageContainerDimensions, setPageContainerDimensions] = useState({
        width: 0,
        height: 0,
    });
    const [scale, setScale] = useState(1.0);
    const swiperRef = useRef(null);
    const containerRef = useRef(null);
    const pageContainerRef = useRef(null);
    const swiperContainerRef = useRef(null);
    const inputRef = useRef(null);
    const debouncedZoomInputValue = useDebounce(zoomInputValue, 1000);
    useEffect(() => {
        const parsedValue = parseFloat(debouncedZoomInputValue);
        if (!isNaN(parsedValue)) {
            if (parsedValue < 50) {
                setZoomInputValue('50');
                setScale(0.5);
            }
            else if (parsedValue > 300) {
                setZoomInputValue('300');
                setScale(3.0);
            }
            else {
                setScale(parsedValue / 100);
            }
        }
        else {
            setZoomInputValue(Math.round(scale * 100).toString());
        }
    }, [debouncedZoomInputValue]);
    useEffect(() => {
        if (resetPage) {
            setPageNumber(1);
            setInputValue('1');
            setZoomInputValue('100');
            setScale(1.0);
        }
    }, [resetPage]);
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key === 'ArrowLeft') {
                goToPreviousPage();
            }
            else if (event.key === 'ArrowRight') {
                goToNextPage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [totalPages]);
    const onDocLoad = event => {
        setTotalPages(event.numPages);
        onLoadSuccess(event.numPages);
    };
    const onDocLoadList = event => {
        onLoadSuccessList(event.numPages);
    };
    const handleLinkClick = event => {
        const url = event.target.href;
        if (!url) {
            return;
        }
        console.log('EVENT:: EXTERNAL', event);
        event.preventDefault();
        event.stopPropagation();
        if (event.target.classList.contains('internalLink')) {
            console.log('Internal link clicked, ignoring:', url);
            return;
        }
        console.log('Detected URL:', url);
        console.log('External link clicked:', url);
        onExternalLinkClicked === null || onExternalLinkClicked === void 0 ? void 0 : onExternalLinkClicked(url, pageNumber);
    };
    const onItemClick = event => {
        console.log('EVENT:: INTERNAL', event);
        setPageNumber(event === null || event === void 0 ? void 0 : event.pageNumber);
        setInputValue(String(event === null || event === void 0 ? void 0 : event.pageNumber));
        onInternalLinkClicked === null || onInternalLinkClicked === void 0 ? void 0 : onInternalLinkClicked(event, event === null || event === void 0 ? void 0 : event.pageNumber);
    };
    const handleClose = () => {
        setIsSwiperVisible(false);
    };
    const handleOpen = () => {
        setIsSwiperVisible(true);
    };
    const goToPreviousPage = () => {
        setPageNumber(prevPage => {
            const newPageNumber = Math.max(prevPage - 1, 1);
            setInputValue(newPageNumber.toString());
            return newPageNumber;
        });
    };
    const goToNextPage = () => {
        setPageNumber(prevPage => {
            const newPageNumber = Math.min(prevPage + 1, totalPages);
            setInputValue(newPageNumber.toString());
            return newPageNumber;
        });
    };
    const handlePageNumberChange = event => {
        const newValue = event.target.value;
        setInputValue(newValue);
        if (newValue === '') {
            return;
        }
        const newPageNumber = parseInt(newValue, 10);
        if (!isNaN(newPageNumber)) {
            if (newPageNumber < 1 || newPageNumber > totalPages) {
                setInputValue(pageNumber.toString());
            }
            else {
                setPageNumber(newPageNumber);
            }
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
    const handleZoomChange = (event) => {
        const newValue = event.target.value;
        if (isNaN(Number(newValue))) {
            return;
        }
        setZoomInputValue(newValue);
    };
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key === 'ArrowLeft') {
                goToPreviousPage();
            }
            else if (event.key === 'ArrowRight') {
                goToNextPage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [totalPages]);
    useEffect(() => {
        var _a;
        const swiperInstance = (_a = swiperRef.current) === null || _a === void 0 ? void 0 : _a.swiper;
        if (swiperInstance && pageNumber >= 1 && pageNumber <= totalPages) {
            swiperInstance === null || swiperInstance === void 0 ? void 0 : swiperInstance.slideTo(pageNumber - 1);
        }
    }, [pageNumber, totalPages, isSwiperVisible]);
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setContainerDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight,
                });
            }
            if (pageContainerRef.current) {
                setPageContainerDimensions({
                    width: pageContainerRef.current.clientWidth,
                    height: pageContainerRef.current.clientHeight,
                });
            }
            if (swiperContainerRef.current) {
                setSwiperDimensions({
                    width: swiperContainerRef.current.clientWidth,
                    height: swiperContainerRef.current.clientHeight,
                });
            }
        };
        setTimeout(updateDimensions, 100);
        const resizeObserver = new ResizeObserver(() => {
            setTimeout(updateDimensions, 100);
        });
        if (swiperContainerRef.current) {
            resizeObserver.observe(swiperContainerRef.current);
        }
        return () => {
            resizeObserver.disconnect();
        };
    }, [isSwiperVisible]);
    return (React.createElement("div", { className: "full-screen", ref: containerRef },
        React.createElement("div", { className: "document-container" },
            React.createElement("div", { className: "pageContainer", ref: pageContainerRef },
                React.createElement("input", { type: "number", min: "1", max: totalPages, value: inputValue, onChange: handlePageNumberChange, onBlur: handleInputBlur, className: "page-input", ref: inputRef }),
                React.createElement("span", null,
                    React.createElement(Text, null, "of")),
                React.createElement("div", { className: "TotalPage" }, totalPages),
                React.createElement("div", { className: "zoom-divider" }),
                React.createElement("div", { className: "zoom-control" },
                    React.createElement("div", { className: "zoom-out-button" },
                        React.createElement(Icon, { lib: "MaterialCommunityIcons", name: "minus", color: colors.black, onPressIcon: handleZoomOut, size: 20 })),
                    React.createElement("div", { className: "zoom-input-container" },
                        React.createElement("input", { type: "number", min: "50", max: "300", step: "10", value: zoomInputValue, onChange: handleZoomChange, className: "zoom-input" }),
                        React.createElement(Text, null,
                            React.createElement("span", { className: "percent-sign" }, "%"))),
                    React.createElement("div", { className: "zoom-in-button" },
                        React.createElement(Icon, { lib: "MaterialCommunityIcons", name: "plus", color: colors.black, onPressIcon: handleZoomIn, size: 20 })))),
            React.createElement("div", { className: `scrollable-container ${isSwiperVisible
                    ? 'scrollable-container-small'
                    : 'scrollable-container-large'}`, style: {
                    height: isSwiperVisible
                        ? containerDimensions.height -
                            pageContainerDimensions.height -
                            swiperDimensions.height || 500
                        : 'auto',
                } },
                React.createElement("div", { className: `full-doc ${docClassName}`, onClick: event => {
                        handleLinkClick(event);
                    } },
                    React.createElement(Document, { file: url, onLoadSuccess: onDocLoad, onLoadError: onLoadErrorWeb, error: onErrorText, loading: loading, noData: noData, onPassword: onPassword, rotate: rotate, onItemClick: onItemClick },
                        React.createElement("div", { className: "scrollable-page-container", style: {
                                height: containerDimensions.height - pageContainerDimensions.height,
                            } },
                            React.createElement(Page, { pageNumber: pageNumber, className: "pdf-page", renderAnnotationLayer: true, height: containerDimensions.height - pageContainerDimensions.height, scale: scale, onLoadSuccess: page => {
                                    onPageChanged === null || onPageChanged === void 0 ? void 0 : onPageChanged(page.pageNumber, totalPages);
                                } })))))),
        pageNumber > 1 && (React.createElement("button", { className: "prev-button", onClick: goToPreviousPage, disabled: pageNumber === 1 },
            React.createElement("div", { className: "icon-container" },
                React.createElement(Icon, { lib: "Entypo", name: "chevron-left", size: 16, style: { padding: 0, margin: 0 }, color: colors.white })))),
        React.createElement("button", { className: "next-button", onClick: goToNextPage, disabled: pageNumber === totalPages },
            React.createElement("div", { className: "icon-container" },
                React.createElement(Icon, { lib: "Entypo", name: "chevron-right", size: 16, style: { padding: 0, margin: 0 }, color: colors.white }))),
        isSwiperVisible && (React.createElement("div", { className: "swiper-container", style: Object.assign({}, containerStyle), ref: swiperContainerRef },
            React.createElement("button", { className: "close-button", onClick: handleClose },
                React.createElement(Text, { style: styles.buttonTextStyle }, "Close")),
            React.createElement("button", { className: "presentation-button", onClick: presentationClick },
                React.createElement(Text, { style: styles.buttonTextStyle }, "Select Presentations")),
            React.createElement(Swiper, { ref: swiperRef, spaceBetween: 45, slidesPerView: "auto", slidesPerGroup: 6, modules: [Navigation, Pagination], pagination: { clickable: true }, className: "swiper-slide-container", breakpoints: {
                    320: {
                        slidesPerGroup: 1,
                    },
                    480: {
                        slidesPerGroup: 2,
                    },
                    768: {
                        slidesPerGroup: 3,
                    },
                    1024: {
                        slidesPerGroup: 4,
                    },
                    1440: {
                        slidesPerGroup: 5,
                    },
                    1920: {
                        slidesPerGroup: 6,
                    },
                }, updateOnWindowResize: true }, [...Array(totalPages).keys()].map((num, index) => (React.createElement(SwiperSlide, { key: num + 1, style: {
                    width: window.screen.width * 0.147,
                    maxWidth: window.screen.width * 0.147,
                    cursor: 'pointer',
                }, onClick: () => {
                    const newPageNumber = index + 1;
                    setPageNumber(newPageNumber);
                    setInputValue(newPageNumber.toString());
                }, className: `swiper-slide-custom ${pageNumber === index + 1 ? 'active' : ''}` },
                React.createElement(Text, { style: styles.numberText }, index + 1),
                React.createElement(Document, { className: "page-document", file: url, onLoadSuccess: onDocLoadList, onLoadError: onLoadErrorListWeb, error: onErrorTextList, loading: loadingList, noData: noDataList, renderAnnotationLayer: false, onItemClick: data => {
                        console.log(data);
                    } },
                    React.createElement(Page, { pageNumber: num + 1, className: "pdf-page", scale: 0.25 })))))))),
        !isSwiperVisible && (React.createElement("button", { className: "open-button", onClick: handleOpen },
            React.createElement(Icon, { lib: "Foundation", name: "page-multiple", size: 35, color: colors.textColor })))));
};
const styles = StyleSheet.create({
    numberText: {
        position: 'absolute',
        bottom: 10,
        left: '65%',
        transform: [{ translateX: -50 }],
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: colors.white,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        zIndex: 10,
    },
    buttonTextStyle: {
        fontWeight: '600',
        fontSize: 16,
        color: colors.primaryColor,
    },
});
export default FileViewer;
