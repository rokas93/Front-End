import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import List from '../../atoms/List';
import {
  NavigationButtonsWrapper,
  NavigationListWrapper,
  NavigationLogoWrapper,
  NavigationStyled,
} from './Navigation.styled';

const Navigation = ({ navLinks, navButtons, logo }) => {
  const [isHovered, setIsHovered] = useState('');

  return (
    <NavigationStyled>
      <NavigationLogoWrapper>
        <Link to={navLinks[0].path}>
          <img src={logo} alt={logo} />
        </Link>
      </NavigationLogoWrapper>
      <NavigationListWrapper>
        {navLinks.slice(0, 3).map((link) => (
          <List
            key={link.text}
            text={link.text}
            path={link.path}
            dropdown={link.dropdown}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
        ))}
      </NavigationListWrapper>
      <NavigationButtonsWrapper>
        {navButtons.map((button) => (
          <Button key={button.text} text={button.text} color={button.color} />
        ))}
      </NavigationButtonsWrapper>
    </NavigationStyled>
  );
};

export default Navigation;
