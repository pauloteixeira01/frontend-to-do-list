import styled from 'styled-components';
import Link from 'next/link'

type NavLinksProps = {
  menu: string;
}

export const StyledContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (width > 600px) {
     width: 50%;
  }
`;

export const StyledContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 20%;
`;

export const StyledSubTitle = styled.span`
  color: #00ff00;
`;

export const StyledMenu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const StyledNavLinks = styled.nav`
  display: flex;
  gap: 20px;
  background-color: red;

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    height: 100%;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    /* right: ${({menu}) => menu === 'true' ? '0' : '-100%'}; */
    right: 0;
    transition: 0.5s;

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const StyledCloseSidebar = styled.div`
  font-size: 30px;
  right: 1rem;
  top: 1rem;
  position: absolute;
  display: flex;
  cursor: pointer;
  
  @media (width > 600px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  color: #00ff00;
  text-decoration: none;
  font-size: 20px;
  transition: 0.3s;
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;

  &.active {
    background-color: black;
  }

  @media(width > 600px) {
    padding: 3rem;
  }
`;

export const StyledLogOut = styled.button`
  color: #00ff00;
  text-decoration: none;
  font-size: 20px;
  transition: 0.3s;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;

  &.active {
    background-color: black;
  }

  @media(width > 600px) {
    padding: 3rem;
  }
`;