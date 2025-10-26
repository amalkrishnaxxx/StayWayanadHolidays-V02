import React, { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

const ImagePlaceholder = ({ currentImage, altText, onImageChange }) => {
  const [preview, setPreview] = useState(currentImage);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        if (onImageChange) {
          onImageChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        if (onImageChange) {
          onImageChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-full h-full group">
      {preview ? (
        <img 
          src={preview} 
          alt={altText}
          className="w-full h-full object-cover"
        />
      ) : (
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{ background: 'var(--bg-subtle)' }}
        >
          <ImageIcon size={48} style={{ color: 'var(--text-light)' }} />
        </div>
      )}
      
      {/* Upload Overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
          isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        style={{ 
          background: 'rgba(255, 107, 53, 0.95)',
          backdropFilter: 'blur(4px)'
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          title="Upload image"
        />
        <Upload size={40} className="text-white mb-3" />
        <p className="text-white font-semibold text-sm mb-1">
          {isDragging ? 'Drop image here' : 'Click or drag to upload'}
        </p>
        <p className="text-white/80 text-xs">
          Supports JPG, PNG, WebP
        </p>
      </div>

      {/* Edit Badge */}
      <div 
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div 
          className="badge"
          style={{ 
            background: 'rgba(255, 255, 255, 0.95)',
            color: 'var(--accent-primary)',
            padding: '6px 12px',
            fontSize: '0.75rem'
          }}
        >
          <Upload size={12} />
          <span>Change</span>
        </div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
