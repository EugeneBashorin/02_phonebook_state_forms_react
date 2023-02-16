import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from "react";
import {LabelEl, LabelElFavorite, FormTag, InputEl, InputFavorite, Button} from "./ContactForm.styled.jsx"
import * as Yup from 'yup';

const nameMaches = "/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/";
const nameErrorMessage = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const phoneErrorMessage = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";

const schema = Yup.object({
    name: Yup.string()
                .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, nameErrorMessage)
                .required('Required'),

    phoneNumber: Yup.string()
                .required('Required')
                .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, phoneErrorMessage),

    favorites: Yup.boolean(),
})

const initialValues = {
    name:'',
    phoneNumber:'',
    favorites: false,
}

export const ContactForm = ({onSubmitProps}) => { 

    const handleSubmit = (values, action) => {
        onSubmitProps(values)
        action.resetForm();
    }

    return(
    <>  
            <Formik
                initialValues={initialValues}  
                validationSchema={schema}
                onSubmit={handleSubmit}
            >   
        {({values, handleChange})  =>  
             (<Form> 
                <fieldset>
                    <LabelEl>
                        Name
                        <Field type="text" name="name" value={values.name} onChange={handleChange}/>
                        <ErrorMessage component="div" name="name"/>
                    </LabelEl>
                    <LabelEl>
                        Number
                        <Field type="tel" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
                            <ErrorMessage component="div" name="phoneNumber"/>
                    </LabelEl>

                    <LabelElFavorite>
                        <Field type="checkbox" name="favorites"/> Add to favorites
                    </LabelElFavorite>
                    <Button type="submit">Add contact</Button> 
                </fieldset>
            </Form>)}
        </Formik>
    </>
    )
}

ContactForm.propTypes = {
    name: PropTypes.string,
    phoneNumber: PropTypes.number,
    favorites: PropTypes.bool,
}