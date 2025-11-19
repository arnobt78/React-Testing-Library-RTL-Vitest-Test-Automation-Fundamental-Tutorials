// This test file contains integration tests for the main App component
// It tests the core functionality of the application, including user search and error handling

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApolloProvider } from '@apollo/client';
import client from '@/apolloClient';
import App from '@/App';

// Mock the chart components to avoid error when rendering in simulated browser environment
// Instead of rendering actual charts, we render simple div elements
vi.mock('@/components/charts/UsedLanguages', () => ({
  default: () => <div>Used Languages</div>,
}));

vi.mock('@/components/charts/PopularRepos', () => ({
  default: () => <div>Popular Repos</div>,
}));

vi.mock('@/components/charts/ForkedRepos', () => ({
  default: () => <div>Forked Repos</div>,
}));

// Helper function to render the App component wrapped with ApolloProvider
// This setup is required for GraphQL functionality
const renderApp = () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

describe('App Integration', () => {
  // Test case: Verify that the profile updates when searching for a new user
  test('should update profile when searching for a user', async () => {
    const user = userEvent.setup();
    renderApp();

    // Verify the default user is displayed initially
    expect(await screen.findByText('quincylarson')).toBeInTheDocument();

    // Find the search input field
    const searchInput = screen.getByRole('textbox');

    // Simulate user interaction: clear the input and type a new username
    await user.clear(searchInput);
    await user.type(searchInput, 'john_doe');

    // Simulate form submission
    const submitButton = screen.getByRole('button', { name: /search/i });
    await user.click(submitButton);

    // Verify that the new user's information is displayed
    expect(await screen.findByText('john_doe')).toBeInTheDocument();

    // Verify that the user's avatar and profile link are updated correctly
    expect(await screen.findByRole('img')).toHaveAttribute(
      'src',
      'https://github.com/images/john_doe.jpg'
    );
    expect(await screen.findByRole('link')).toHaveAttribute(
      'href',
      'https://github.com/john_doe'
    );
  });

  // Test case: Verify error handling for invalid usernames
  test('should show error for invalid username', async () => {
    const user = userEvent.setup();
    renderApp();

    // Simulate searching for an invalid username
    const searchInput = screen.getByRole('textbox');
    await user.clear(searchInput);
    await user.type(searchInput, 'invalid-username');

    const submitButton = screen.getByRole('button', { name: /search/i });
    await user.click(submitButton);

    // Verify that the appropriate error message is displayed
    expect(
      await screen.findByText(/could not resolve to a user/i)
    ).toBeInTheDocument();
  });

  // Test case: Verify error handling for failed API requests
  test('should show error when request fails', async () => {
    const user = userEvent.setup();
    renderApp();

    // Simulate a failed request scenario
    const searchInput = screen.getByRole('textbox');
    await user.clear(searchInput);
    await user.type(searchInput, 'request-error');

    const submitButton = screen.getByRole('button', { name: /search/i });
    await user.click(submitButton);

    // Verify that the generic error message is displayed
    expect(await screen.findByText('there was an error')).toBeInTheDocument();
  });
});
