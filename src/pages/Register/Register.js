import { Container } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Container maxW="container.xl" py={2}>
      <title>Registration</title>
      <RegisterForm />
    </Container>
  );
}
