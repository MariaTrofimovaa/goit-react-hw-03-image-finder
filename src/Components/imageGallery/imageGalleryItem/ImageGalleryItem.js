import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ pictures, onOpenModal }) => {
  return pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li className={styles.ImageGalleryItem} key={id}>
        <img
          src={webformatURL}
          alt={tags}
          data-img={largeImageURL}
          onClick={onOpenModal}
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
  });
};

ImageGalleryItem.prototypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.number.isRequired,
      tags: PropTypes.number.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
