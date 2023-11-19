import React from 'react';
import 'components/styles.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <li key={image.id} className="ImageGalleryItem">
          <img
            src={image.webformatURL}
            alt=""
            className="ImageGalleryItem-image"
            onClick={() => openModal(image.largeImageURL)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;