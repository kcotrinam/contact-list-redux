import { connect } from 'react-redux';
import ContactCard from './ContactCard';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Phone Number</TableCell>
							<TableCell>E-mail</TableCell>
						</TableRow>
					</TableHead>
					{renderContacts(contacts)}
				</Table>
			</TableContainer>
		</div>
	);
};

const mapStateToProps = (state) => ({
	contacts: state.contactsReducer,
});

export default connect(mapStateToProps, null)(ContactList);
