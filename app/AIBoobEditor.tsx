import React, { useState } from 'react';
import Image from 'next/image';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const AIBoobEditor = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [size, setSize] = useState('2');
  const [loading, setLoading] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
      setGeneratedImageUrl(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('请选择一张图片');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('size', size);

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/generate-boobs-image`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('生成图片失败');
      }

      const data = await response.json();
      if (data.imgURL) {
        setGeneratedImageUrl(data.imgURL);
      } else {
        throw new Error('未收到生成的图片 URL');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('生成图片时出错');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>AI Boob Editor</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="1">小</option>
          <option value="2">中</option>
          <option value="3">大</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? '生成中...' : '生成丰胸图片'}
        </button>
      </form>
      <div style={{ marginTop: '20px' }}>
        {(previewUrl || generatedImageUrl) && (
          <Image
            src={generatedImageUrl || previewUrl}
            alt="Preview"
            width={500}
            height={500}
            layout="responsive"
          />
        )}
      </div>
    </div>
  );
};

export default AIBoobEditor;