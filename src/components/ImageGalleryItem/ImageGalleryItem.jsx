import { GalleryItem, ImageStyled } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webImg, largeImg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GalleryItem onClick={openModal}>
        <ImageStyled src={webImg} alt={webImg} />
      </GalleryItem>
      {isModalOpen && <Modal largeImg={largeImg} closeModal={closeModal} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  largeImg: PropTypes.string.isRequired,
  webImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
