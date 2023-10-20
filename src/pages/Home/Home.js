import { Box, Container, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="container.xl" py={2}>
      <Box display="flex" justifyContent="center" alignItems="center" pt={6}>
        <Text fontSize="6xl">Welcome to the phone book!</Text>
      </Box>
    </Container>
  );
}
