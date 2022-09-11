import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  const elements = contacts.map(({ id, name, number }) => 
    (<li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <Button type='button' onClick={() => onDeleteContact(id)}>Delete</Button>
    </li>)); 

  return (
    <ol>
      {elements}
    </ol>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.number.isRequired
    })),
  onDeleteContact:PropTypes.func
}

export default memo(ContactList);