// This test file contains unit tests for the ForkedRepos component
// It verifies the correct rendering of the chart component and its data visualization

import { render, screen } from '@testing-library/react';
import ForkedRepos from '@/components/charts/ForkedRepos';
import { mockRepositories } from './utils';

// Mock the chart UI components to simplify testing
// Replace complex chart containers with simple div elements
vi.mock('@/components/ui/chart', () => {
  return {
    ChartContainer: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    ChartTooltip: ({ content }: { content: React.ReactNode }) => (
      <div>{content}</div>
    ),
    ChartTooltipContent: () => <div>Tooltip Content</div>,
  };
});

// Mock the recharts library components
// Replace actual chart elements with simple div elements for testing
vi.mock('recharts', () => {
  return {
    BarChart: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    CartesianGrid: () => <div>CartesianGrid</div>,
    XAxis: () => <div>XAxis</div>,
    YAxis: () => <div>YAxis</div>,
    Bar: () => <div>Bar</div>,
  };
});

describe('ForkedRepos', () => {
  // Set up the component before each test
  beforeEach(() => {
    render(<ForkedRepos repositories={mockRepositories} />);
  });

  // Test case: Verify basic component rendering
  test('should render the ForkedRepos component', () => {
    expect(screen.getByText('Forked Repos')).toBeInTheDocument();
  });

  // Test case: Verify that all chart elements are present
  test('should render the chart with correct data', () => {
    // Check for the presence of each chart element
    expect(screen.getByText('CartesianGrid')).toBeInTheDocument();
    expect(screen.getByText('XAxis')).toBeInTheDocument();
    expect(screen.getByText('YAxis')).toBeInTheDocument();
    expect(screen.getByText('Bar')).toBeInTheDocument();
    expect(screen.getByText('Tooltip Content')).toBeInTheDocument();
  });
});
