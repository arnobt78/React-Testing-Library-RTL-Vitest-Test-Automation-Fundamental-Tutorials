// This test file contains unit tests for the StatsCard component
// It verifies the component's ability to display various types of statistical data

import { render, screen } from '@testing-library/react';
import StatsCard from '@/components/user/StatsCard';

describe('StatsCard', () => {
  // Test case: Verify basic rendering with a standard number
  test('renders title and count correctly', () => {
    render(<StatsCard title='Total Users' count={42} />);

    // Verify both the title and count are displayed correctly
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  // Test case: Verify handling of zero values
  test('renders with zero count', () => {
    render(<StatsCard title='Active Sessions' count={0} />);

    // Verify zero values are displayed properly and not hidden
    expect(screen.getByText('Active Sessions')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  // Test case: Verify handling of large numbers
  test('renders with large numbers', () => {
    render(<StatsCard title='Total Views' count={1000000} />);

    // Verify large numbers are displayed without truncation or formatting issues
    expect(screen.getByText('Total Views')).toBeInTheDocument();
    expect(screen.getByText('1000000')).toBeInTheDocument();
  });
});
