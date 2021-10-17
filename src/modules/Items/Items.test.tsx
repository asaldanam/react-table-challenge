import { render, screen, fireEvent, within, prettyDOM } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import ItemsWrapper from './view';

render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ItemsWrapper />
  </ThemeProvider>,
);

const inputMock = '12345';

test('Add new item to the table', () => {
  // Searchs new row inputs
  const newRow = within(screen.getByTestId('Table_newRow'));
  const textInputs = newRow.getAllByRole('textbox') as HTMLInputElement[];
  const numberInputs = newRow.getAllByRole('spinbutton') as HTMLInputElement[];
  const inputs = [...textInputs, ...numberInputs];

  // Fills inputs with inputMocked value
  inputs.forEach((input) => {
    fireEvent.change(input, { target: { value: inputMock } });
    expect(input.value).toBe(inputMock);
  });

  // Finds & click "Add new" button
  const addNewButton = newRow.getByText(/Add new/i);
  fireEvent.click(addNewButton);

  const rows = screen.getAllByText(inputMock);
  expect(rows[0]).toHaveTextContent(inputMock);
});

const altInputMock = '98765';

test('Edits item from the table', () => {
  // Finds & click edit button
  const editButton = screen.getByText(/Edit/i);
  fireEvent.click(editButton);

  // Replaces first input value
  const inputs = screen.getAllByDisplayValue(inputMock) as HTMLInputElement[];
  fireEvent.change(inputs[0], { target: { value: altInputMock } });
  expect(inputs[0].value).toBe(altInputMock);

  // Finds & click "Save" button
  const saveButton = screen.getByText(/Save/i);
  fireEvent.click(saveButton);

  const table = screen.getByRole('table');
  expect(table).toHaveTextContent(altInputMock);
});

test('Display is shown when users clicks on first element', () => {
  // Finds & click edit button
  const firstCell = screen.getByText(altInputMock);
  fireEvent.click(firstCell);

  // Get detail panel
  const detailPanel = screen.getByTestId('Items_Detail');

  expect(detailPanel).toHaveTextContent(/Detail/i);
  expect(detailPanel).toHaveTextContent(/id/i);
  expect(detailPanel).toHaveTextContent(altInputMock);
});

test('Closes detail panel after click close', () => {
  // Get detail panel
  const detailPanel = screen.getByTestId('Items_Detail');

  // Finds & click close button
  const closeBtn = within(detailPanel).getByLabelText(/close/i);
  fireEvent.click(closeBtn);

  expect(detailPanel).not.toBeVisible();
});

test('Remove testing element from the list', () => {
  // Gets table
  const table = screen.getByRole('table');

  // Control test
  expect(table).toHaveTextContent(altInputMock);

  // Finds & click remove button
  const removeBtn = screen.getByText(/remove/i);
  fireEvent.click(removeBtn);

  expect(table).not.toHaveTextContent(altInputMock);
});
