import { Container } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Container maxW="container.xl" py={2}>
      <title>Login</title>
      <LoginForm />
    </Container>
  );
}
