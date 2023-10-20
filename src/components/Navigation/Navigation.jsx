import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';
import { Box, Container, Flex, useColorMode } from '@chakra-ui/react';

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

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
      <Container maxW="container.xl">
        <Flex
          display="flex"
          gap="50px"
          justifyContent="space-between"
          alignItems="center"
        >
          <StyledLink to="/">Home</StyledLink>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </Flex>
      </Container>
    </Box>
  );
};
