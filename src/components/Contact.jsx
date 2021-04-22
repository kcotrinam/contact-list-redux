const Contact = ({ name, lastname, phone, email }) => {
	return (
		<div>
			<div>{name}</div>
			<div>{lastname}</div>
			<div>{phone}</div>
			<div>{email}</div>
		</div>
	);
};

export default Contact;
