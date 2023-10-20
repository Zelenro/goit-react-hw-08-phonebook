import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { Logo } from '../../Logo';
import { Box, Container, Flex, useColorMode } from '@chakra-ui/react';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  const { colorMode } = useColorMode();
  return (
    <header>
      <Box
        as="header"
        py="2"
        bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
      >
        <Container maxW="container.xl">
          <Flex
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Logo h="5vmin" pointerEvents="none" />
            <Navigation />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Container>
      </Box>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
