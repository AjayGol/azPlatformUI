import {Platform} from 'react-native';
// import {
//   request,
//   PERMISSIONS,
//   RESULTS,
//   openSettings,
// } from 'react-native-permissions';

let DocumentPicker: typeof import('react-native-document-picker') | undefined;
if (Platform.OS === 'ios' || Platform.OS === 'android') {
  DocumentPicker = require('react-native-document-picker');
}
// Convert accept prop to DocumentPicker types
export const getDocumentPickerTypes = (accept: string): string[] => {
  const typeMap: {[key: string]: string[]} = {
    // Image types
    'image/jpeg': [DocumentPicker.types.images],
    'image/png': [DocumentPicker.types.images],
    'image/gif': [DocumentPicker.types.images],
    'image/*': [DocumentPicker.types.images],

    // PDF
    'application/pdf': [DocumentPicker.types.pdf],

    // Word documents
    'application/msword': [DocumentPicker.types.doc],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
      DocumentPicker.types.docx,
    ],

    // Excel spreadsheets
    'application/vnd.ms-excel': [DocumentPicker.types.xlsx],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
      DocumentPicker.types.xlsx,
    ],

    // PowerPoint presentations
    'application/vnd.ms-powerpoint': [DocumentPicker.types.ppt],
    'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      [DocumentPicker.types.pptx],

    // Text files
    'text/plain': [DocumentPicker.types.plainText],

    // Archive files
    'application/zip': [DocumentPicker.types.zip],

    // Audio files
    'audio/mpeg': [DocumentPicker.types.audio],
    'audio/wav': [DocumentPicker.types.audio],

    // Video files
    'video/mp4': [DocumentPicker.types.video],
    'video/x-matroska': [DocumentPicker.types.video],

    // Others
    'application/octet-stream': [DocumentPicker.types.allFiles], // General fallback
    '*/*': [DocumentPicker.types.allFiles],
  };

  if (!accept || accept.trim() === '') {
    return [DocumentPicker.types.allFiles];
  }

  // If accept is a comma-separated list, split it into an array
  const acceptedTypes = accept.split(',').map(type => type.trim());

  // Flatten the array of types and remove duplicates
  const documentPickerTypes = acceptedTypes.flatMap(
    type => typeMap[type] || [],
  );

  return Array.from(new Set(documentPickerTypes));
};

// Function to check and request permission
// export const requestStoragePermission = async (): Promise<boolean> => {
//   if (Platform.OS === 'android') {
//     try {
//       const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

//       if (result === RESULTS.GRANTED) {
//         console.log('Read external storage permission granted');
//         return true;
//       } else if (result === RESULTS.DENIED) {
//         console.log('Permission denied. User needs to grant it.');
//         // Optionally, guide user to settings if permission is denied
//         // openSettings(); // Uncomment to open settings
//         return false;
//       } else if (result === RESULTS.BLOCKED) {
//         console.log('Permission blocked. Redirecting to settings.');
//         // Optionally, guide user to settings if permission is blocked
//         openSettings(); // Opens app settings for the user
//         return false;
//       } else {
//         console.log('Unhandled permission result');
//         return false;
//       }
//     } catch (error) {
//       console.error('Error requesting permission:', error);
//       return false;
//     }
//   }

//   // Ensure that the function always returns a value
//   return false;
// };
