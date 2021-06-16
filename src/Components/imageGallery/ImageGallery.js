import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ pictures, onOpenModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem pictures={pictures} onOpenModal={onOpenModal} />
    </ul>
  );
};

ImageGallery.prototypes = {
  pictures: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
