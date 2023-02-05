import styled from 'styled-components';
import { SlArrowUp } from 'react-icons/sl';

export const UpBtn = styled.button`
  position: fixed;
  bottom: 5%;
  right: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  color: black;
  background-color: white;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: white;
    background-color: red;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const UpBtnIcon = styled(SlArrowUp)`
  width: 30px;
  height: 30px;
`;
