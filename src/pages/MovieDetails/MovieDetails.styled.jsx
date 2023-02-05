import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 5px 10px;
  margin: 30px;
  width: 80px;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  border-color: black;
  text-decoration: none;
  color: black;
  background-color: white;
  transition: all 200ms linear;

  &:hover,
  &:focus {
    color: white;
    background-color: red;
  }
`;

export const MovieDetailsImg = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 5px;
  border: 1px solid black;
`;

export const MovieName = styled.h2`
  margin-bottom: 10px;
  color: white;
`;

export const MovieDetailsTitle = styled.h3`
  margin-bottom: 15px;
  color: white;
`;

export const MovieUserScore = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
  span {
    margin-right: 8px;
  }
`;

export const MovieDetailsData = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  color: white;
`;
