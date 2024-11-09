export interface UploadProps {
  color?: string;
  showClearButton?: boolean;
  multiple?: boolean;
  accept?: string;
  maxFilesCount?: number;
  uploadText?: string;
  maxFilesSize?: number;
  showProgress?: boolean;
  progressValue?: number;
  sendUploadFiles?: (files: UploadFileProps[]) => void;
}

export interface UploadFileProps {
  size?: number;
  uri?: string;
  name?: string;
  type?: string;
}
