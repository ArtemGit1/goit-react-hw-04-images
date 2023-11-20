import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem.js';
import 'components/styles.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem key={image.id} imageUrl={image.webformatURL} onImageClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;