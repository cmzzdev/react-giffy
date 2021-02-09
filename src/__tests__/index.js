import React from 'react';
import { render, screen, waitForElement, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders without crashing', async () => {
    render(<App />);
    const linkElement = await screen.findByText(/Última búsqueda/i);
    expect(linkElement).toBeInTheDocument();
});

test('home work as expected', async () => {
    const { container } = render(<App />);
    const giftLink = await waitForElement(
        () =>  container.querySelector('.Gif-link')      
    )
    expect(giftLink).toBeVisible()
});

test('search form could be used', async () => {
    render(<App />);
    const input = await screen.findByRole('textbox')
    const button = await screen.findByRole('button')

    fireEvent.change(input, { target: { value: 'Matrix' }} )
    fireEvent.click(button)       

    const title = await screen.findByText('Matrix')
    expect(title).toBeVisible()
})
