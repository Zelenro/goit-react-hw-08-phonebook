import { Container } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  transition: color 0.3s;
  &:hover {
    color: grey;
  }
  &:focus {
    color: grey;
  }
`;

export default function AuthNav() {
  return (
    <Container
      maxW="container.xl"
      display="flex"
      my={2}
      justifyContent="center"
      alignItems="center"
      gap="20"
    >
      <StyledLink to="register">Registration</StyledLink>
      <StyledLink to="/login">Sign in</StyledLink>
    </Container>
  );
}
