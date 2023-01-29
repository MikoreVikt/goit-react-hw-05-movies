import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 5px 10px;
  width: 80px;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 15px;
  margin-left: 25px;
  color: black;
  transition: all 200ms linear;

  &:hover,
  &:focus {
    color: red;
  }
`;

export const MovieName = styled.h2`
  margin-bottom: 10px;
`;

export const MovieUserScore = styled.p`
  margin-bottom: 20px;
  span {
    margin-right: 8px;
  }
`;
export const MovieDetailsTitle = styled.h3`
  margin-bottom: 15px;
`;
export const MovieDetailsData = styled.p`
  margin-bottom: 40px;
`;
