import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ContactList from './contacts/ContactList';
import ContactForm from './contacts/ContactForm';

const App = () => {
	return (
		<div style={{ marginTop: '1.2rem' }}>
			<CssBaseline />
			<Container style={{ backgroundColor: '#cfe8fc', padding: '1.2rem' }}>
				<Typography
					variant='h2'
					component='h2'
					gutterBottom
					style={{ textAlign: 'center' }}>
					Contact Form
				</Typography>
				<ContactForm />
				<Typography
					variant='h2'
					component='h2'
					gutterBottom
					style={{ textAlign: 'center', paddingTop: '1.2rem' }}>
					Contact List
				</Typography>
				<ContactList />
			</Container>
		</div>
	);
};

export default App;
