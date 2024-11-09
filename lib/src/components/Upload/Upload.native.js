var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { styles } from './Upload.styles';
import { colors } from '../../constants/colors';
import Button from '../Button';
import Icon from '../../common/Icon';
import { convertBytes, isWeb } from '../../constants/constant';
import { getDocumentPickerTypes } from './UploadUtils';
import DocumentPicker from 'react-native-document-picker';
const Upload = ({ showClearButton = true, multiple = false, accept = 'application/pdf', maxFilesCount = 5, maxFilesSize = 5, uploadText = 'Drop files here or click to upload', showProgress = false, progressValue = 0, sendUploadFiles, }) => {
    const [files, setFiles] = useState([]);
    const maxFilesSizeInBytes = maxFilesSize * 1024 * 1024;
    const fileExists = (file) => {
        return files.some(existingFile => existingFile.name === file.name);
    };
    const handleFiles = newFiles => {
        if (!multiple) {
            if (newFiles.length > 0) {
                const file = newFiles[0];
                if (file.size > maxFilesSizeInBytes) {
                    alert(`${file.name} exceeds the maximum size of ${maxFilesSize} MB.`);
                    return;
                }
                if (fileExists(file)) {
                    alert('File already uploaded.');
                    return;
                }
                setFiles([
                    {
                        uri: isWeb ? URL.createObjectURL(file) : file.uri,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                    },
                ]);
            }
        }
        else {
            if (files.length + newFiles.length > maxFilesCount) {
                alert(`You can only upload a maximum of ${maxFilesCount} files.`);
                return;
            }
            const validFiles = newFiles.filter(file => {
                if (file.size > maxFilesSizeInBytes) {
                    alert(`${file.name} exceeds the maximum size of ${maxFilesSize} MB.`);
                    return false;
                }
                if (fileExists(file)) {
                    alert(`File ${file.name} is already uploaded.`);
                    return false;
                }
                return true;
            });
            if (validFiles.length) {
                setFiles(prevFiles => [
                    ...prevFiles,
                    ...validFiles.map(file => ({
                        uri: isWeb ? URL.createObjectURL(file) : file.uri,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                    })),
                ]);
            }
        }
    };
    const handleImagePicker = () => __awaiter(void 0, void 0, void 0, function* () {
        if (DocumentPicker) {
            try {
                const res = yield DocumentPicker.pick({
                    type: getDocumentPickerTypes(accept),
                    allowMultiSelection: multiple,
                });
                handleFiles(res);
            }
            catch (err) {
                if (DocumentPicker.isCancel(err)) {
                    console.log('User cancelled document picker');
                }
                else {
                    alert(err);
                }
            }
        }
    });
    const handleClear = () => {
        setFiles([]);
    };
    const handleRemoveFile = (file) => {
        setFiles(files.filter(f => f.name !== file.name));
    };
    const onPressHandler = Platform.select({
        ios: handleImagePicker,
        android: handleImagePicker,
    });
    const onPressUpload = () => {
        if (sendUploadFiles) {
            sendUploadFiles(files);
            handleClear();
        }
    };
    return (React.createElement(View, { style: styles.container },
        React.createElement(TouchableOpacity, { style: styles.dropZone, onPress: onPressHandler, testID: "fileInput" },
            React.createElement(View, { style: styles.placeholderContainer },
                React.createElement(Text, { style: styles.titleStyle }, uploadText),
                React.createElement(Icon, { name: "image", lib: "EvilIcons", size: 48, style: styles.placeholder, color: colors.suggestionText, onPressIcon: onPressHandler }))),
        showProgress && progressValue > 0 && (React.createElement(View, { style: styles.progressBar },
            React.createElement(View, { style: Object.assign(Object.assign({}, styles.progressFill), { width: `${progressValue}%` }), testID: "progressBar" }))),
        React.createElement(View, { style: styles.chipButtonContainer },
            files.length > 0 && (React.createElement(View, { style: styles.fileChipContainer }, files.map((file, index) => (React.createElement(View, { key: index, style: styles.fileChip },
                React.createElement(Text, { style: styles.fileChipText }, `${file.name} - ${convertBytes(file.size || 0)}`),
                React.createElement(Icon, { name: "close-circle-outline", lib: "Ionicons", size: 15, onPressIcon: () => handleRemoveFile(file) })))))),
            React.createElement(View, { style: styles.buttonContainer },
                showClearButton && (React.createElement(View, { style: styles.clearButton },
                    React.createElement(Button, { label: "Clear", variant: "outline", disabled: !files.length, onPress: handleClear }))),
                React.createElement(Button, { label: "Upload", disabled: !files.length, onPress: onPressUpload })))));
};
export default Upload;
