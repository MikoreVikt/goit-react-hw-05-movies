import styled from 'styled-components';

export const MovieReviewsList = styled.ul`
  width: 80%;
  padding: 0;
  margin: 0 auto;
  list-style: none;
`;

export const MovieReviewsItem = styled.li`
  padding: 20px;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
