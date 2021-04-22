import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ContactCard = ({ name, lastname, phone, email }) => {
	return (
		<TableBody>
			<TableRow>
				<TableCell component='th' scope='row'>
					{`${name} ${lastname}`}
				</TableCell>
				<TableCell>{phone}</TableCell>
				<TableCell>{email}</TableCell>
			</TableRow>
		</TableBody>
	);
};

export default ContactCard;
