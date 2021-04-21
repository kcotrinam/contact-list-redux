const INITIAL_STATE = {
	name: '',
	lastname: '',
	phone: '',
	email: '',
};

const contactsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default contactsReducer;
