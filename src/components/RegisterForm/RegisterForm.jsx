import { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(formData));
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container
      maxW="container.sm"
      my={6}
      py={6}
      border="2px"
      borderRadius="4px"
    >
      <FormControl as="form" onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Username
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormLabel>
        <FormLabel>
          Email
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormLabel>
        <FormLabel>
          Password
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormLabel>
        <Button type="submit">Register</Button>
      </FormControl>
    </Container>
  );
};
