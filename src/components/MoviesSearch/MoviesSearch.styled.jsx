import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const SearchTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 30px;
  color: white;
`;

export const SearchForm = styled.form`
  position: relative;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  min-width: 250px;
  height: 30px;
  font-size: 16px;
  padding: 5px 30px 5px 10px;
  color: white;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  transition: border-color 250ms linear;
  &:hover,
  &:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid white;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  color: white;
  transition: color 250ms linear;
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover,
  &:focus {
    color: red;
  }
`;
