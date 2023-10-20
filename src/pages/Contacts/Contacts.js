import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { Container } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxW="container.xl">
      <ContactForm />
      <Filter />
      <title>Contacts</title>
      {isLoading && 'Stand by, loading in progress...'}
      <ContactList />
    </Container>
  );
}
