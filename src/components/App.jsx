import { Component } from "react";
import PropTypes from "prop-types";
import { ContactForm  } from "./ContactForm/ContactForm.jsx";
import { ContactList } from "./ContactList/ContactList";
import { FilterComponent } from "./FilterComponent/FilterComponent";
import { nanoid } from 'nanoid';
import {SectionBlock} from "./App.styled.jsx"

const INITIAL_STATE = {
  contacts: [],
  filter:"",
}

export class App extends Component {
  state = {...INITIAL_STATE}

  formSubmitHandler = data =>{
    if(!this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())){
      this.setState(prevState =>{
        return{
          contacts: [{id: nanoid(), name: data.name, number: data.number}, ...prevState.contacts]
        }
      }) 
    }else{
      alert(`${data.name} is already in contacts.`)
      return;
   }
  }

  changeFilter = event => {
    this.setState( {filter: event.target.value})
  }

  deleteContact = idContact => {
    this.setState( prevState => {
        return{
          contacts: prevState.contacts.filter(contact => contact.id !== idContact)
        }
      }
    )
  }

  render (){
    const normalizeFilter = this.state.filter.toLowerCase();
    const filteredData = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
    return (
      <>
        <SectionBlock>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
        </SectionBlock>
        <SectionBlock>
        <h2>Contacts</h2>
        <FilterComponent value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList nameList={filteredData} onDeleteContact={this.deleteContact}/>
        </SectionBlock>
      </>
    )
  }
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  state: PropTypes.object,
}