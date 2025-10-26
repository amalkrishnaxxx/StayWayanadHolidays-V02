import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { Save, RefreshCw } from 'lucide-react';

const ImageManager = () => {
  const [destinationImages, setDestinationImages] = useState(
    destinations.reduce((acc, dest) => {
      acc[dest.id] = dest.image;
      return acc;
    }, {})
  );

  const handleImageChange = (destinationId, newImageUrl) => {
    setDestinationImages(prev => ({
      ...prev,
      [destinationId]: newImageUrl
    }));
  };

  const handleSave = () => {
    // In a real application, this would save to a backend
    // For now, we'll just show the updated data structure
    const updatedDestinations = destinations.map(dest => ({
      ...dest,
      image: destinationImages[dest.id]
    }));

    console.log('Updated destinations:', updatedDestinations);
    alert('Images updated! Check console for the updated data structure.\n\nIn a real application, this would save to your database.');
  };

  const handleReset = () => {
    setDestinationImages(
      destinations.reduce((acc, dest) => {
        acc[dest.id] = dest.image;
        return acc;
      }, {})
    );
  };

  return (
    <div style={{ background: 'var(--bg-page)' }} className="min-h-screen py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Destination Image Manager</h1>
          <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
            Click or drag images to upload new destination photos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="premium-card overflow-hidden p-0">
              <div className="h-64">
                <ImagePlaceholder
                  currentImage={destinationImages[destination.id]}
                  altText={destination.name}
                  onImageChange={(newImage) => handleImageChange(destination.id, newImage)}
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 mb-2">{destination.name}</h3>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {destination.state}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <button onClick={handleSave} className="btn-primary">
            <Save size={20} /> Save Changes
          </button>
          <button onClick={handleReset} className="btn-secondary">
            <RefreshCw size={20} /> Reset to Default
          </button>
        </div>

        <div className="mt-12 premium-card p-8 max-w-3xl mx-auto">
          <h3 className="heading-3 mb-4">How to Replace Images Permanently:</h3>
          <div className="space-y-4 body-medium" style={{ color: 'var(--text-secondary)' }}>
            <div>
              <strong style={{ color: '#FFFF' }}>Option 1: Edit destinations.js file</strong>
              <p className="mt-2">
                Open <code className="px-2 py-1 rounded" style={{ background: 'var(--bg-subtle)' }}>/app/frontend/src/data/destinations.js</code> and update the image URLs for each destination.
              </p>
            </div>

            <div>
              <strong style={{ color: '#FFFF' }}>Option 2: Use this Image Manager</strong>
              <ol className="list-decimal ml-6 mt-2 space-y-2">
                <li>Upload images using the interface above</li>
                <li>Click "Save Changes" to see the updated structure in console</li>
                <li>Copy the console output and update your destinations.js file</li>
              </ol>
            </div>

            <div>
              <strong style={{ color: '#FFFF' }}>Option 3: Use Image URLs</strong>
              <p className="mt-2">
                You can use:
                <ul className="list-disc ml-6 mt-2">
                  <li>Unsplash URLs (free high-quality images)</li>
                  <li>Your own hosted images</li>
                  <li>Images stored in /public folder: <code className="px-2 py-1 rounded" style={{ background: 'var(--bg-subtle)' }}>/images/destination-name.jpg</code></li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageManager;
