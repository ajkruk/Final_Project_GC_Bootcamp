import React, { useState } from 'react';
import axios from 'axios';

const PhotoUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUploadedImage(response.data.imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadedImage && (
        <div>
          <p>Uploaded Image:</p>
          <img src={uploadedImage} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default PhotoUpload