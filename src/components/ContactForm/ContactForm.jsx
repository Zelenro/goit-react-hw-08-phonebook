import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import * as Yup from 'yup';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-Я]+$/, 'Name should contain only letters')
      .min(3, 'Enter a name from 3 to 50 letters!')
      .max(50, 'Enter a name from 3 to 50 letters!')
      .required('Necessarily'),
    number: Yup.string()
      .matches(/^[0-9]+$/, 'Number should contain only digits')
      .min(5, 'Number not less than 5 digits and not more than 20 digits!')
      .max(20, 'Number not less than 5 digits and not more than 20 digits!')
      .required('Necessarily'),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
      actions.resetForm();
    }
  };

  return (
    <Container py={4} maxW="container.sm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {props => (
          <Form>
            <FormControl
              py={4}
              isInvalid={props.errors.name && props.touched.name}
              id="name"
            >
              <FormLabel>Name:</FormLabel>
              <Field
                as={Input}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" component={FormErrorMessage} />
            </FormControl>

            <FormControl
              py={4}
              isInvalid={props.errors.number && props.touched.number}
              id="number"
            >
              <FormLabel>Number:</FormLabel>
              <Field
                as={Input}
                type="tel"
                id="number"
                name="number"
                placeholder="Number"
              />
              <ErrorMessage name="number" component={FormErrorMessage} />
            </FormControl>

            <Button type="submit" mt={4}>
              Add contact
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
