import React from 'react';

const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL, largeImageURL } = image;

  const handleImageClick = () => {
    openModal(largeImageURL);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={handleImageClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
