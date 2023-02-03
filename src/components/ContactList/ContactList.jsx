import PropTypes from 'prop-types';
import React from "react";
import {ListElement, ListItem, Button} from "./ContactList.styled.jsx"

export const ContactList = ({nameList, onDeleteContact}) => {
    return (
        <ListElement>
            {nameList.map( contact => (
                <ListItem key={contact.id}>{contact.name}: {contact.number} <Button type="button" onClick={()=> onDeleteContact(contact.id)}>Delete</Button></ListItem>
            ))}
        </ListElement>
    )
}
ContactList.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
}