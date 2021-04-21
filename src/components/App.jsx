import React from 'react';
import { connect } from 'react-redux';

const App = ({ ADD_CONTACT, contacts }) => {
	const showProps = () => {
		console.log(contacts);
	};

	return (
		<div>
			<h1>To-Do list</h1>
			<button
				onClick={() =>
					ADD_CONTACT({
						type: 'ADD_CONTACT',
						payload: { name: 'kevin', lastname: 'cotrina' },
					})
				}>
				Add contact
			</button>
			<button onClick={showProps}>show Props</button>
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
