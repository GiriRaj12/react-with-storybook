import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard.js';

test('Dashboard Test', () => {
    const { getByText } = render(<Dashboard></Dashboard>);
    const element = getByText(/Giriraj/i);
    expect(element.classList.contains('user-name-details')).toBe(true);
});

test('Dashboard Test lazy component 1', () => {
    const { container } = render(<Dashboard></Dashboard>);
    expect(container.firstChild.hasChildNodes('objective-container')).toBe(true);
});

test('Dashboard Test lazy load component 2', () => {
    const { container } = render(<Dashboard></Dashboard>);
    expect(container.firstChild.lastChild.hasChildNodes('graphs-main-container')).toBe(true);
});