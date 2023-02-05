import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const MovieDetailsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  color: white;
`;

export const MovieCastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px;
  width: 80%;
  padding: 0;
`;

export const MovieCastItem = styled.li`
  margin: 0;
  padding: 0;
  color: white;
  list-style: none;
  width: 200px;
  background-color: #740101ba;
  box-shadow: inset 0 0 30px 1px rgb(0 0 0 / 75%),
    0 11px 9px -5px rgb(0 0 0 / 75%);
  border-radius: 5px;
  overflow: hidden;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    scale: 1.03;
  }
`;

export const MovieCastImg = styled.img`
  margin: 0;
  object-fit: cover;
`;

export const MovieActorData = styled.p`
  padding: 7px 5px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  span {
    font-size: 12px;
    font-weight: 400;
  }
`;
