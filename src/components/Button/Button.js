import React from 'react';
import 'components/styles.css';

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className="Button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;
  