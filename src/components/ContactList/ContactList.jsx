import React from "react";

export const ContactList = ({nameList, onDeleteContact}) => {
    return (
        <ul>
            {nameList.map( contact => (
                <li key={contact.id}>{contact.name}: {contact.number} <button type="button" onClick={()=> onDeleteContact(contact.id)}>Delete</button></li>
            ))}
        </ul>
    )
}