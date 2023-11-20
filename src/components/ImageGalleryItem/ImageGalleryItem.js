import React from 'react';
import 'components/styles.css';

const ImageGalleryItem = ({ imageUrl, onImageClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onImageClick(imageUrl)}>
      <img className="ImageGalleryItem-image" src={imageUrl} alt="" />
    </li>
  );
};

export default ImageGalleryItem;