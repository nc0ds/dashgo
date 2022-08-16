import { render, screen, fireEvent } from '@testing-library/react';
import { PageButton } from '../PageButton';

describe('Pagination PageButton component', () => {
	it('should render correctly', () => {
		render(<PageButton page={1} onPageChange={jest.fn()} />);

		expect(screen.getByText('1')).toBeInTheDocument();
	});

	it('should render correctly when disabled', () => {
		render(<PageButton page={1} onPageChange={jest.fn()} disabled />);

		const button = screen.getByText('1');

		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('disabled');
	});

	it('should call "onPageChange" when clicked', () => {
		const onPageChange = jest.fn();

		render(<PageButton page={1} onPageChange={onPageChange} />);

		const button = screen.getByText('1');

		fireEvent.click(button);

		expect(onPageChange).toHaveBeenCalledTimes(1);
	});

	it('should not call "onPageChange" when clicked disabled', () => {
		const onPageChange = jest.fn();

		render(<PageButton page={1} onPageChange={onPageChange} disabled />);

		const button = screen.getByText('1');

		fireEvent.click(button);

		expect(onPageChange).toHaveBeenCalledTimes(0);
	});
});
