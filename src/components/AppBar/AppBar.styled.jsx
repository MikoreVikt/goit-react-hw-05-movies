import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background-color: #740101ba;
  box-shadow: inset 0 0 30px 1px rgb(0 0 0 / 75%),
    0 11px 9px -5px rgb(0 0 0 / 75%);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  width: 110px;
  height: 40px;
  color: black;
  background-color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-transform: uppercase;

  &.active {
    color: white;
    background-color: red;
  }
  :hover: not(.active),
  :focus-visible:not(.active) {
    color: white;
    background-color: red;
  }
`;
