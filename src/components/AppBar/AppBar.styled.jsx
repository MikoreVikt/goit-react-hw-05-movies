import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  width: 110px;
  height: 50px;
  color: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 10px;

  &.active {
    color: red;
  }
  :hover: not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;
