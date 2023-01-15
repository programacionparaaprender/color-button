import { render, screen, within } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  logRoles(container);
  const linkElement1 = screen.getByText(/learn react/i);
  expect(linkElement1).toBeInTheDocument();

  const linkElement2 = screen.getByRole('link', {name: /learn react/i });
  expect(linkElement2).toBeInTheDocument();

});

test('probando texto de input', () => {
  render(<App />);
  const inputElement1 = screen.getByDisplayValue(/texto1/i);
  expect(inputElement1).toBeInTheDocument();

  const inputElement2 = screen.getByRole('textbox', {value: /texto1/i });
  expect(inputElement2).toBeInTheDocument();
  expect(inputElement2).toHaveStyle({ backgroundColor: 'red' });
  //throw new Error('test failed');
});