import { connect } from 'react-redux';
import { useState } from 'react';
import { addContactAction } from '../../actions/index';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const ContactForm = ({ addContact }) => {
	const [formStates, setFormStates] = useState({
		name: '',
		lastname: '',
		phone: '',
		email: '',
	});

	const handleChange = ({ target }) => {
		setFormStates((prev) => ({
			...prev,
			[target.name]: target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addContact(formStates);
		setFormStates({
			name: '',
			lastname: '',
			phone: '',
			email: '',
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<FormControl>
					<InputLabel>Name</InputLabel>
					<Input
						aria-describedby='my-helper-text'
						value={formStates.name}
						name='name'
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl>
					<InputLabel>Lastname</InputLabel>
					<Input
						aria-describedby='my-helper-text'
						value={formStates.lastname}
						name='lastname'
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl>
					<InputLabel>Phone</InputLabel>
					<Input
						aria-describedby='my-helper-text'
						value={formStates.phone}
						name='phone'
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl>
					<InputLabel>E-mail</InputLabel>
					<Input
						aria-describedby='my-helper-text'
						value={formStates.email}
						name='email'
						onChange={handleChange}
					/>
				</FormControl>
				<Button
					color='primary'
					component='button'
					size='large'
					variant='contained'>
					Add contact
				</Button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addContact: (data) => {
			dispatch(addContactAction(data));
		},
	};
};

export default connect(null, mapDispatchToProps)(ContactForm);
