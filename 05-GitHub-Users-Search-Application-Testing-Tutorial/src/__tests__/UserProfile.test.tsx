// This test file contains integration tests for the UserProfile component
// It tests the component's ability to fetch and display user data using GraphQL,
// as well as proper error handling for various scenarios

import { render, screen } from '@testing-library/react';
import UserProfile from '@/components/user/UserProfile';
import client from '@/apolloClient';
import { ApolloProvider } from '@apollo/client';

// Mock chart components to simplify testing
// Replace complex chart components with simple div elements
vi.mock('@/components/charts/UsedLanguages', () => ({
  default: () => <div>Used Languages</div>,
}));

vi.mock('@/components/charts/PopularRepos', () => ({
  default: () => <div>Popular Repos</div>,
}));

vi.mock('@/components/charts/ForkedRepos', () => ({
  default: () => <div>Forked Repos</div>,
}));

// Helper function to render the UserProfile component with Apollo Provider
// This ensures GraphQL queries work correctly in tests
const renderUserProfile = async (userName: string) => {
  render(
    <ApolloProvider client={client}>
      <UserProfile userName={userName} />
    </ApolloProvider>
  );
};

describe('UserProfile', () => {
  // Test case: Verify successful profile rendering with valid user data
  test('renders UserProfile component', async () => {
    const userName = 'john_doe';
    await renderUserProfile(userName);

    // Verify username is displayed
    expect(await screen.findByText(userName)).toBeInTheDocument();
    expect(await screen.findByText(userName)).toBeInTheDocument();

    // Verify avatar image is present with correct URL
    expect(await screen.findByRole('img')).toHaveAttribute(
      'src',
      `https://github.com/images/${userName}.jpg`
    );

    // Verify user bio is displayed
    expect(
      await screen.findByText(/full-stack developer/i)
    ).toBeInTheDocument();

    // Verify GitHub profile link is correct
    expect(await screen.findByRole('link')).toHaveAttribute(
      'href',
      `https://github.com/${userName}`
    );
  });

  // Test case: Verify error handling for failed API requests
  test('renders error message when request fails', async () => {
    const userName = 'request-error';
    await renderUserProfile(userName);
    expect(await screen.findByText('there was an error')).toBeInTheDocument();
  });

  // Test case: Verify error handling for non-existent users
  test('renders error message when user not found', async () => {
    const userName = 'invalid-username';
    await renderUserProfile(userName);
    expect(
      await screen.findByText(/could not resolve to a user/i)
    ).toBeInTheDocument();
  });
});
