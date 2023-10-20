import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Container, Flex, Button, Text } from '@chakra-ui/react';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container maxW="container.xl" py={2} as="header">
      <Flex display="flex" justifyContent="space-between">
        <Text fontSize="3xl">{user.name}</Text>
        <Button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </Flex>
    </Container>
  );
}
