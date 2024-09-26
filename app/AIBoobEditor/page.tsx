'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../AIBoobEditor.module.css';

const AIBoobEditor = () => {
  const [file, setFile] = useState<File | null>(null);
  const [size, setSize] = useState<string>('2');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string>('/images/image3.png');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setPreviewImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    formData.append('size', size);

    try {
      const response = await fetch('/api/generate-boobs-image', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResultImage(data.imgURL);
        setPreviewImage(data.imgURL);
      } else {
        console.error('Failed to generate image');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>AI Boobs Enhancer</h1>
        <div className={styles.content}>
          <div className={styles.imagePreview}>
            <Image src={previewImage} alt="Preview" width={500} height={500} className={styles.previewImage} />
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.uploadSection}>
              <label htmlFor="file-upload" className={styles.fileUploadLabel}>
                {file ? file.name : 'Choose an image'}
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={styles.fileInput}
              />
            </div>
            <div className={styles.sizeSection}>
              <label htmlFor="size-select">Choose enhancement level:</label>
              <select
                id="size-select"
                value={size}
                onChange={handleSizeChange}
                className={styles.sizeSelect}
              >
                <option value="1">Subtle Enhancement</option>
                <option value="2">Moderate Enhancement</option>
                <option value="3">Significant Enhancement</option>
                <option value="4">Maximum Enhancement</option>
              </select>
            </div>
            <button type="submit" className={styles.submitButton}>
              Enhance Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIBoobEditor;