import styled from 'styled-components';

export const MovieReviewsList = styled.ul`
  width: 80%;
  padding: 0;
  margin: 0 auto;
  list-style: none;
`;

export const MovieReviewsItem = styled.li`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
