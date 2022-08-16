import { render, screen } from '@testing-library/react';
import { UsersTableItem } from '../UsersTableItem';
import { UsersTable } from '../UsersTable';

describe('Users page UsersTableItem component', () => {
	it('should render correctly', () => {
		render(
			<UsersTable>
				<UsersTableItem
					name='John Doe'
					email='john.doe@gmail.com'
					createdAt='16/08/2022'
				/>
			</UsersTable>
		);

		expect(screen.getByText('John Doe')).toBeInTheDocument();
		expect(screen.getByText('john.doe@gmail.com')).toBeInTheDocument();
		expect(screen.getByText('16/08/2022')).toBeInTheDocument();
		expect(screen.getByText('Editar')).toBeInTheDocument();
	});
});
