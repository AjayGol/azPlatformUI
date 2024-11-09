import React, {useState, DragEvent} from 'react';
import {View, Text, Platform} from 'react-native';
import {styles} from './Upload.styles';
import {UploadFileProps, UploadProps} from './Upload.types';
import {colors} from '../../constants/colors';
import Button from '../Button';
import Icon from '../../common/Icon';
import {convertBytes, isWeb} from '../../constants/constant';

const Upload: React.FC<UploadProps> = ({
  showClearButton = true,
  multiple = false,
  accept = 'application/pdf',
  maxFilesCount = 5,
  maxFilesSize = 5, // in MB
  uploadText = 'Drop files here or click to upload',
  showProgress = false,
  progressValue = 0,
  sendUploadFiles,
}) => {
  const [files, setFiles] = useState<UploadFileProps[]>([]);

  const maxFilesSizeInBytes = maxFilesSize * 1024 * 1024;

  const fileExists = (file: File): boolean => {
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
    } else {
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

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const newFiles = Array.from(event.dataTransfer.files);

    handleFiles(newFiles);
  };

  const handleClear = () => {
    setFiles([]);
  };

  const handleRemoveFile = (file: UploadFileProps) => {
    setFiles(files.filter(f => f.name !== file.name));
  };

  const onPressHandler = Platform.select({
    web: () => document.getElementById('fileInput')?.click(),
  });

  const onPressUpload = () => {
    if (sendUploadFiles) {
      sendUploadFiles(files);
      handleClear();
    }
  };
  return (
    <View style={styles.container}>
      <div
        className="dropZone"
        style={styles.dropZone}
        onClick={onPressHandler}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}>
        <View style={styles.placeholderContainer}>
          <Text style={styles.titleStyle}>{uploadText}</Text>

          <Icon
            name="image"
            lib="EvilIcons"
            size={48}
            style={styles.placeholder}
            color={colors.suggestionText}
            onPressIcon={onPressHandler}
          />
        </View>

        <input
          type="file"
          id="fileInput"
          accept={accept}
          multiple={multiple}
          style={styles.webInputContainer}
          onChange={e => {
            if (e.target.files) {
              handleFiles(Array.from(e.target.files));
            }
          }}
        />
      </div>

      {showProgress && progressValue > 0 && (
        <View style={styles.progressBar}>
          <View
            style={{...styles.progressFill, width: `${progressValue}%`}}
            testID="progressBar"
          />
        </View>
      )}

      <View style={styles.chipButtonContainer}>
        {files.length > 0 && (
          <View style={styles.fileChipContainer}>
            {files.map((file, index) => (
              <View key={index} style={styles.fileChip}>
                <Text style={styles.fileChipText}>
                  {`${file.name} - ${convertBytes(file.size || 0)}`}
                </Text>
                <Icon
                  name="close-circle-outline"
                  lib="Ionicons"
                  size={15}
                  onPressIcon={() => handleRemoveFile(file)}
                />
              </View>
            ))}
          </View>
        )}

        <View style={styles.buttonContainer}>
          {showClearButton && (
            <View style={styles.clearButton}>
              <Button
                label="Clear"
                variant="outline"
                disabled={!files.length}
                onPress={handleClear}
              />
            </View>
          )}
          <Button
            label="Upload"
            disabled={!files.length}
            onPress={onPressUpload}
          />
        </View>
      </View>
    </View>
  );
};

export default Upload;
