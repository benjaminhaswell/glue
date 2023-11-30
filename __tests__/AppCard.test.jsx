import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AppCard from '../src/components/AppCard.jsx';




describe('AppCard Component', () => {
  it('renders app information correctly', () => {
    const appObjectMock = {
      imageName: 'snapchat.png',
      name: 'Snapchat',
      organization: 'Snap Inc.',
    };

    render(<AppCard appObject={appObjectMock} />);

    // Assertions using screen queries
    const appNameElement = screen.getByText('Snapchat');
    const organizationElement = screen.getByText('Snap Inc.');
    const imageElement = screen.getByAltText('AppIcon');

    expect(appNameElement).toBeInTheDocument();
    expect(organizationElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    // Add more assertions as needed
  });

  // Add more test cases for different scenarios, edge cases, etc.
});
