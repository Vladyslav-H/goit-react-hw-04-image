import { OverlayStyled, ModalStyled } from './Modal.styled';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, largeImg }) => {
  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', closeModalByEscape);
    return () => {
      window.removeEventListener('keydown', closeModalByEscape);
    };
  }, []);

  const closeModalByEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  return (
    <OverlayStyled onClick={handleCloseModal}>
      <ModalStyled>
        <img src={largeImg} alt={largeImg} width="800" height="600" />
      </ModalStyled>
    </OverlayStyled>
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
