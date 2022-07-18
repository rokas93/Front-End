// ------------- //
// -- IMPORTS -- //
// ------------- //
import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// Styles
import {
  ModalHeaderStyled,
  ModalOverlayStyled,
  ModalStyled,
  ModalWrapperStyled,
} from './Modal.styled';
import LoginForm from '../Form/LoginForm';
import RegisterForm from '../Form/RegisterForm';

// --------------- //
// -- COMPONENT -- //
// --------------- //
const Modal = ({ type, onClose }) => {
  // Side Effects
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') onClose();
    });
  }, [onClose]);

  // Functions
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') onClose();
  };

  return ReactDOM.createPortal(
    <>
      <ModalOverlayStyled></ModalOverlayStyled>
      <ModalWrapperStyled data-id='modalWrapper' onClick={closeOnOverlay}>
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          className={'form-animate'}
        >
          <ModalStyled>
            <ModalHeaderStyled>
              <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
              <span onClick={() => onClose()}>&times;</span>
            </ModalHeaderStyled>
            {type === 'login' && <LoginForm />}
            {type === 'register' && <RegisterForm />}
          </ModalStyled>
        </motion.div>
      </ModalWrapperStyled>
    </>,
    document.getElementById('portal')
  );
};

// -------------------------- //
// -- CHECKING PROPS TYPES -- //
// -------------------------- //
Modal.propTypes = {
  type: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
