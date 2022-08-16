import { render, screen } from '@testing-library/react';
import { UsersTable } from '../UsersTable';

describe('Users page UsersTable component', () => {
	it('should render correctly', () => {
		render(
			<UsersTable>
				<tr>
					<td>John Doe</td>
					<td>john.doe@gmail.com</td>
					<td>16/08/2022</td>
				</tr>
			</UsersTable>
		);

		expect(screen.getByText('Usuário')).toBeInTheDocument();
		expect(screen.getByText('Data de cadastro')).toBeInTheDocument();
	});
});
