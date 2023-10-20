import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectFilterContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import {
  Button,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (!filterContacts?.length) {
    return <p>No contacts found.</p>;
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={[1, 2, 3, 5]}
        spacing={[2, 2, 4, 6]}
        alignItems="center"
        py={4}
      >
        {filterContacts.map(contact => {
          return (
            <Stack
              key={contact.id}
              spacing="2"
              p="2"
              _hover={
                colorMode === 'dark'
                  ? { shadow: 'outline' }
                  : { shadow: 'dark-lg' }
              }
              borderRadius="4px"
              border={colorMode === 'dark' ? '1px' : '2px'}
              borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
            >
              <Text isTruncated> {contact.name}</Text>
              <Text isTruncated> tel: {contact.number}</Text>

              <Button
                as="a"
                variant="solid"
                type="button"
                cursor="pointer"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </Button>
            </Stack>
          );
        })}
      </SimpleGrid>
    </>
  );
};
