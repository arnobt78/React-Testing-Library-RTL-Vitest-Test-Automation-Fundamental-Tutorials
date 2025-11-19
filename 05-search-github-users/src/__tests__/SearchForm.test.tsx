// This test file contains unit tests for the SearchForm component
// It tests form functionality, input validation, and error handling

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import SearchForm from '@/components/form/SearchForm';

// Mock dependencies and setup test doubles
const mockToast = vi.fn();
const setUserNameMock = vi.fn();

// Mock the toast hook to test error notifications
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: mockToast,
  }),
}));

describe('SearchForm', () => {
  const user = userEvent.setup();

  // Reset all mocks before each test to ensure clean state
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Helper function to get form elements used across multiple tests
  function getFormElements() {
    const input = screen.getByRole('textbox', { name: /search/i });
    const button = screen.getByRole('button', { name: /search/i });
    return { input, button };
  }

  // Test case: Verify initial form rendering with provided username
  test('renders the search form correctly', () => {
    render(<SearchForm userName='john_doe' setUserName={setUserNameMock} />);

    const { input, button } = getFormElements();

    expect(input).toHaveValue('john_doe');
    expect(button).toBeInTheDocument();
  });

  // Test case: Verify form handling of empty username
  test('displays empty input when userName is empty', () => {
    render(<SearchForm userName='' setUserName={setUserNameMock} />);

    const { input } = getFormElements();
    expect(input).toHaveValue('');
  });

  // Test case: Verify input change handling
  test('updates input value on change', async () => {
    render(<SearchForm userName='' setUserName={setUserNameMock} />);

    const { input } = getFormElements();

    await user.type(input, 'john_doe');
    expect(input).toHaveValue('john_doe');
  });

  // Test case: Verify error handling for empty submission
  test('shows toast when submitting empty input', async () => {
    render(<SearchForm userName='' setUserName={setUserNameMock} />);

    const { button } = getFormElements();
    await user.click(button);
    expect(mockToast).toHaveBeenCalledWith({
      description: 'Please enter a valid username',
    });
    expect(setUserNameMock).not.toHaveBeenCalled();
  });

  // Test case: Verify successful form submission
  test('calls setUserName on valid form submission', async () => {
    render(<SearchForm userName='' setUserName={setUserNameMock} />);

    const { input, button } = getFormElements();

    await user.type(input, 'jane_doe');
    await user.click(button);

    expect(setUserNameMock).toHaveBeenCalledWith('jane_doe');
    expect(mockToast).not.toHaveBeenCalled();
  });
});
