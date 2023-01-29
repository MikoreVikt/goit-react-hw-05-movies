import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 40px 0;
  gap: 30px;
`;

export const MovieItem = styled.li`
  width: 240px;
  background-color: #940000ba;
  border-radius: 5px;
  overflow: hidden;
  transition: scale 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const MovieTitle = styled.p`
  text-align: center;
  padding: 10px;
  color: white;
  font-size: 15px;
  font-weight: 700;
`;
