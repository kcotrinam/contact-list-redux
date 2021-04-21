import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

const App = ({ ADD_CONTACT, contacts }) => {
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

	return (
		<div>
			<h1>To-Do list</h1>
			<form action=''>
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
				<button
					onClick={() =>
						ADD_CONTACT({
							type: 'ADD_CONTACT',
							payload: { name: 'kevin', lastname: 'cotrina' },
						})
					}>
					Add contact
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	contacts: state.contactsReducer,
});

const mapDispatchToProps = (dispatch) => {
	return {
		ADD_CONTACT: (data) => {
			dispatch({ type: 'ADD_CONTACT', payload: data });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
