// App.jsx
import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar.js';
import ImageGallery from './ImageGallery/ImageGallery.js';
import Button from './Button/Button.js';
import Loader from './Loader/Loader.js';
import Modal from './Modal/Modal.js';
import { getImages } from './Services/Api.js';

import 'components/styles.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState(null);

  useEffect(() => {
    if (!query) return;
    fetchImages();
  }, [query]);

  useEffect(() => {
    setShowButton(images.length > 0);
  }, [images]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const newImages = await getImages(query, page);
      setImages((prevImages) => [...prevImages, ...newImages]);
      setPage((prevPage) => prevPage + 1);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    fetchImages();
  };

  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
  };

  const closeModal = () => {
    setModalImageUrl(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {showButton && !loading && <Button onLoadMore={handleLoadMore} />}
      {modalImageUrl && <Modal imageUrl={modalImageUrl} onClose={closeModal} />}
    </div>
  );
};

export default App;
