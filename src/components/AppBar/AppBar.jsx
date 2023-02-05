import { Header, Nav, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
    </Header>
  );
};
