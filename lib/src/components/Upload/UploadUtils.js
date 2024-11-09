import { Platform } from 'react-native';
let DocumentPicker;
if (Platform.OS === 'ios' || Platform.OS === 'android') {
    DocumentPicker = require('react-native-document-picker');
}
export const getDocumentPickerTypes = (accept) => {
    const typeMap = {
        'image/jpeg': [DocumentPicker.types.images],
        'image/png': [DocumentPicker.types.images],
        'image/gif': [DocumentPicker.types.images],
        'image/*': [DocumentPicker.types.images],
        'application/pdf': [DocumentPicker.types.pdf],
        'application/msword': [DocumentPicker.types.doc],
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
            DocumentPicker.types.docx,
        ],
        'application/vnd.ms-excel': [DocumentPicker.types.xlsx],
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
            DocumentPicker.types.xlsx,
        ],
        'application/vnd.ms-powerpoint': [DocumentPicker.types.ppt],
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': [DocumentPicker.types.pptx],
        'text/plain': [DocumentPicker.types.plainText],
        'application/zip': [DocumentPicker.types.zip],
        'audio/mpeg': [DocumentPicker.types.audio],
        'audio/wav': [DocumentPicker.types.audio],
        'video/mp4': [DocumentPicker.types.video],
        'video/x-matroska': [DocumentPicker.types.video],
        'application/octet-stream': [DocumentPicker.types.allFiles],
        '*/*': [DocumentPicker.types.allFiles],
    };
    if (!accept || accept.trim() === '') {
        return [DocumentPicker.types.allFiles];
    }
    const acceptedTypes = accept.split(',').map(type => type.trim());
    const documentPickerTypes = acceptedTypes.flatMap(type => typeMap[type] || []);
    return Array.from(new Set(documentPickerTypes));
};
