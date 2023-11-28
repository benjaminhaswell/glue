import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../src/pages/Login.jsx'; // Adjust the path to your Login component
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Login Component', () => {
    // Add this mock before tests run 
    beforeAll(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {}); 
    });
  
    // Add this after tests to restore original implementation
    afterAll(() => {
        console.log.mockRestore();
    });

    const history = createMemoryHistory();

    it('submits username and password correctly', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>);

        // Get input elements for username and password
        const usernameInput = screen.getByLabelText('Username');
        const passwordInput = screen.getByLabelText('Password');

        // Fill in the username and password inputs
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

        // Get the submit button and simulate form submission
        const submitButton = screen.getByRole('button', { name: 'Login' });
        fireEvent.click(submitButton);

        // Check if console.log was called with correct username and password
        expect(console.log).toHaveBeenCalledWith('Username:', 'testuser');
        expect(console.log).toHaveBeenCalledWith('Password:', 'testpassword');
    });

    it('handles empty username/password entry', () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        
        const submitButton = screen.getByRole('button', { name: 'Login' });
        const usernameInput = screen.getByLabelText('Username');
        const passwordInput = screen.getByLabelText('Password');
        
        // test both empty
        fireEvent.click(submitButton);
        expect(console.log).toHaveBeenCalledWith('Form has errors. Please fill in all required fields.');

        // try with only username
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });

        fireEvent.click(submitButton);
        expect(console.log).toHaveBeenCalledWith('Form has errors. Please fill in all required fields.');

        // try with only password
        fireEvent.change(usernameInput, { target: { value: '' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });

        fireEvent.click(submitButton);
        expect(console.log).toHaveBeenCalledWith('Form has errors. Please fill in all required fields.');

    })
});
