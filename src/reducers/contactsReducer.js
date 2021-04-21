const INITIAL_STATE = [
	{
		name: 'kevin',
		lastname: 'cotrina',
		phone: '555555555',
		email: 'kevin@cotrina.com',
	},
	{
		name: 'michael',
		lastname: 'marquez',
		phone: '222222222',
		email: 'michael@marquez.com',
	},
];

const contactsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_CONTACT':
			console.log(action);
			return state;
		default:
			return state;
	}
};

export default contactsReducer;
