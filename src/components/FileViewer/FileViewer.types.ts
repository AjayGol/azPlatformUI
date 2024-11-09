import {Swiper as SwiperCore} from 'swiper';
import {PDFDocumentProxy} from 'react-pdf';
import {PdfProps} from 'react-native-pdf';

export interface FileViewerProps extends PdfProps {
  url: string;
  presentationClick: () => void;
  loadComplete: (numberOfPages: number) => void;
  containerStyle?: React.CSSProperties;
  onLoadErrorWeb?: object;
  onLoadErrorListWeb?: object;
  onInternalLinkClicked?: (url: string, pageNumber: number) => void;
  onExternalLinkClicked?: (url: string, pageNumber?: number) => void;
  onLoadSuccess?: (pdf: object) => void;
  onPageChanged?: (page: number, numberOfPages: number) => void;
  onLoadSuccessList?: (pdf: object) => void;
  docClassName?: React.CSSProperties;
  onErrorText?: string;
  loading?: string;
  noData?: string;
  onPassword?: (password: object) => void;
  rotate?: number;
  onErrorTextList?: string;
  onPressLink?: (url: string) => void;
  loadingList?: string;
  noDataList?: string;
  onClickOpenClose?: (value: boolean) => void;
  resetPage: boolean;
}

export interface SwiperRef {
  swiper: SwiperCore;
}

export interface PDFPageLoadEvent {
  numPages: number;
}

export type DocumentRef = PDFDocumentProxy;
