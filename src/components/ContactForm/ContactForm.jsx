import PropTypes from 'prop-types';
import React, {Component} from "react";
import {LabelEl, Form, InputEl, Button} from "./ContactForm.styled.jsx"

export class ContactForm extends Component {
    state = {
        name: "",
        number:"",
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({name: "", number:""})
    }

    render(){
        return(
            <>      
                <Form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <LabelEl>
                            Name
                            <InputEl
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            />
                        </LabelEl>
                        <LabelEl>
                            Number
                            <InputEl
                                type="tel"
                                name="number"
                                value={this.state.number}
                                onChange={this.handleChange}
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                required
                                />
                        </LabelEl>
                        <Button type="submit">Add contact</Button>
                    </fieldset>
                </Form>
            </>
        )
    }
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    state: PropTypes.object,
}