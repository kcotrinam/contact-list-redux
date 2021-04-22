import { connect } from 'react-redux';
import { useState } from 'react';
import { addContactAction } from '../../actions/index';

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
				<label>
					Name
					<input value={formStates.name} name='name' onChange={handleChange} />
				</label>
				<label>
					Lastname
					<input
						value={formStates.lastname}
						name='lastname'
						onChange={handleChange}
					/>
				</label>
				<label>
					phone
					<input
						value={formStates.phone}
						name='phone'
						onChange={handleChange}
					/>
				</label>
				<label>
					E-mail
					<input
						value={formStates.email}
						name='email'
						onChange={handleChange}
					/>
				</label>
				<button>Add contact</button>
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
