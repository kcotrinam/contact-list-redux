import React from 'react';

import ContactList from './contacts/ContactList';
import ContactForm from './contacts/ContactForm';

const App = () => {
	return (
		<div>
			<h1>Contacts form</h1>
			<ContactForm />
			<ContactList />
		</div>
	);
};

export default App;
