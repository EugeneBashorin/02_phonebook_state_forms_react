import PropTypes from 'prop-types';
import React from "react";
import { LabelEl, InputEl } from './FilterComponent.styled';

export const FilterComponent = ({value, onChange}) => {
    return(        
        <LabelEl>
            Find contacts by name
            <InputEl
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        </LabelEl>
    )
}

FilterComponent.propTypes = {
    value: PropTypes.string,
}