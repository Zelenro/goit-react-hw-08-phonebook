import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/selectors';
import { Container, FormLabel, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  return (
    <Container py={4} maxW="container.sm">
      <FormLabel>
        Find contacts by name
        <Input
          type="text"
          onChange={event => dispatch(setFilter(event.target.value.trim()))}
          value={filter}
          name="filter"
          id="filter"
        />
      </FormLabel>
    </Container>
  );
};
