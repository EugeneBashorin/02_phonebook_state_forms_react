import React from "react";

export const FilterComponent = ({value, onChange}) => {
    return(        
        <label>
            <p>Find contacts by name</p>
            <input
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        </label>
    )
}