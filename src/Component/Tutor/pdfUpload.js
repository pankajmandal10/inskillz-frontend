import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function PdfUpload({ inputChange }) {
  const [previewImage, setPreviewImage] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
    const file = acceptedFiles[0];
    const name = file.name;
    previewImageHandler(name);
    inputChange(file);
  }, []);

  const previewImageHandler = (name) => {
    setPreviewImage(name);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'application/pdf',
  });

  const active = () => {
    if (document.getElementById('pdfBroachure'))
      document.getElementById('pdfBroachure').style.borderColor =
        'rgb(68, 176, 238)';
  };
  const inactive = () => {
    if (document.getElementById('pdfBroachure'))
      document.getElementById('pdfBroachure').style.borderColor = '#D7D7D7';
  };

  return (
    <div>
      <div
        id='pdfBroachure'
        className='dragzone uk-text-center'
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <i className='fas fa-times-circle pdfCloseEdit'></i>
        <i class='fas fa-file-pdf fa-5x'></i>

        {isDragActive ? active() : inactive()}
        {!previewImage ? <p>Upload pdf </p> : <p>{previewImage} </p>}
      </div>
    </div>
  );
}
