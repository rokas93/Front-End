// ------------- //
// -- IMPORTS -- //
// ------------- //
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Components
import Modal from '../Modal';
// Styles
import {
  HeaderStyled,
  NavList,
  ButtonsWrapperStyled,
  ButtonStyled,
  NavButton,
} from './Header.styled';
// Layouts
import Layouts from '../../Layouts';

// --------------- //
// -- COMPONENT -- //
// --------------- //
const Header = () => {
  // State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  // Function
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClick = (e) => {
    setModalType(e.target.dataset.type);
    openModal();
    return;
  };

  return (
    <>
      <HeaderStyled>
        <nav>
          <NavList>
            {Layouts.map((route) => (
              <NavButton key={route.id}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  {route.title}
                </NavLink>
              </NavButton>
            ))}
          </NavList>
        </nav>
        <ButtonsWrapperStyled>
          <ButtonStyled data-type={'login'} onClick={handleClick} primary>
            Login
          </ButtonStyled>
          <ButtonStyled data-type={'register'} onClick={handleClick}>
            Register
          </ButtonStyled>
        </ButtonsWrapperStyled>
      </HeaderStyled>
      {isModalOpen && <Modal type={modalType} onClose={closeModal} />}
    </>
  );
};

export default Header;
