import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  min-height: 3.25rem;
`;

export const NavigationButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
  padding: 0.5rem 0.75rem;
`;

export const NavigationLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 0.5;
  padding: 0.5rem 0.75rem;

  img {
    width: 112px;
    height: 28px;
  }
`;

export const NavigationListWrapper = styled.ul`
  display: flex;
  list-style: none;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 20px;
`;
