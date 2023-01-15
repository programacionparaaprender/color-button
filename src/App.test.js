import { render, screen, fireEvent } from '@testing-library/react';
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

test('probando botón 1', () => {
  render(<App />);
  const boton1 = screen.getByRole('button', { name: "Botón 1"});
  expect(boton1).toBeInTheDocument();
  boton1.click();

  const inputElement2 = screen.getByRole('textbox', {value: /texto1/i });
  expect(inputElement2).toBeInTheDocument();
  expect(inputElement2).toHaveStyle({ backgroundColor: 'blue' });
});
test('probando botón 1 test dos', () => {
  render(<App />);
  const boton1 = screen.getByRole('button', { name: "Botón 1"});
  fireEvent.click(boton1);
  const inputElement2 = screen.getByRole('textbox', {value: /texto1/i });
  expect(inputElement2).toBeInTheDocument();
  expect(inputElement2).toHaveStyle({ backgroundColor: 'blue' });
});

test('probando botón 1 texto', () => {
  render(<App />);
  const boton1 = screen.getByRole('button', { name: "Botón 1"});
  expect(boton1.textContent).toBe('Botón 1');
  expect(boton1).toBeEnabled();
});

test('probando botón Change to blue', () => {
  render(<App />);
  const boton1 = screen.getByRole('button', { name: "Change to blue"});
  fireEvent.click(boton1);
  expect(boton1).toBeInTheDocument();
  expect(boton1).toHaveStyle({ backgroundColor: 'blue' });
  expect(boton1).toBeEnabled();

});


test('probando checkbox', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('probando checkbox', () => {
  render(<App />);
  const boton1 = screen.getByRole('button', { name: "Change to blue"});
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(boton1).toBeDisabled();
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);
  expect(boton1).toBeEnabled();
  expect(checkbox).not.toBeChecked();

});