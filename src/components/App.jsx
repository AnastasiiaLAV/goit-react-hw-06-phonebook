import ContactForm from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Wrapper } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { removeContacts } from "../redux/contacts/contacts-actions";
import { getFilter, getFilteredContacts } from "redux/selectors";

export default function App() {
const contacts = useSelector(getFilteredContacts);
const filter = useSelector(getFilter);

const dispatch = useDispatch();

const deleteContact =(payload) => {
    dispatch(removeContacts(payload));
  } 

  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  
  // const [filter, setFilter] = useState('');

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(5),
  //     name,
  //     number,
  //   };
    
  //   const sameСontacts = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number);

  //   if (sameСontacts) {
  //     Notify.warning('This contact already exists');
  //     return;
  //   }
  //     setContacts(prevContacts => [...prevContacts, contact])
  // }

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]
  // );
  
  // const filterOnChange = (e) => setFilter(e.target.value);

  // const deleteContact = useCallback((id) => {
  //   setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
  // }, [setContacts]);

  // const visibleContacts = () => {
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase()))
  // };

  return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter filter={filter}/>
        <ContactList contacts={contacts} onDeleteContact={deleteContact}/>
      </Wrapper>
    )
}
