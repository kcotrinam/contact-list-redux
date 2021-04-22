import { connect } from 'react-redux';
import ContactCard from './ContactCard';

const ContactList = ({ contacts }) => {
	const renderContacts = (contacts) =>
		contacts.map((contact) => (
			<ContactCard
				key={contact.phone}
				name={contact.name}
				lastname={contact.lastname}
				email={contact.email}
				phone={contact.phone}
			/>
		));

	return (
		<div>
			<h1>ContactList</h1>
			<ul>{renderContacts(contacts)}</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({
	contacts: state.contactsReducer,
});

export default connect(mapStateToProps, null)(ContactList);
