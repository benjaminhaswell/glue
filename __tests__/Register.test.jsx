import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Register from '../src/pages/Register.jsx';
import '@testing-library/jest-dom';

describe('Register component', () => {

    beforeAll(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {}); 
    });
  
    afterAll(() => {
        console.log.mockRestore();
    });

    it('renders all input fields', () => {
        const { getByPlaceholderText } = render(<Register />);
        expect(getByPlaceholderText('First Name')).toBeInTheDocument();
        expect(getByPlaceholderText('Last Name')).toBeInTheDocument();
        expect(getByPlaceholderText('Username')).toBeInTheDocument();
        expect(getByPlaceholderText('Password')).toBeInTheDocument();
        expect(getByPlaceholderText('Verify Password')).toBeInTheDocument();
    });

    it('updates state upon input change', () => {
        const { getByPlaceholderText } = render(<Register />);
        const firstNameInput = getByPlaceholderText('First Name');
        const lastNameInput = getByPlaceholderText('Last Name');
        const usernameInput = getByPlaceholderText('Username');
        const passwordInput = getByPlaceholderText('Password');
        const verPasswordInput = getByPlaceholderText('Verify Password');

        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(usernameInput, { target: { value: 'johndoe123' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(verPasswordInput, { target: { value: 'password123' } });

        expect(firstNameInput.value).toBe('John');
        expect(lastNameInput.value).toBe('Doe');
        expect(usernameInput.value).toBe('johndoe123');
        expect(passwordInput.value).toBe('password123');
        expect(verPasswordInput.value).toBe('password123');
    });

    it('submits form with valid data', () => {
        const { getByPlaceholderText, getByText } = render(<Register />);
        const submitButton = getByText('Create');
        const firstNameInput = getByPlaceholderText('First Name');
        const lastNameInput = getByPlaceholderText('Last Name');
        const usernameInput = getByPlaceholderText('Username');
        const passwordInput = getByPlaceholderText('Password');
        const verPasswordInput = getByPlaceholderText('Verify Password');

        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(usernameInput, { target: { value: 'johndoe123' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(verPasswordInput, { target: { value: 'password123' } });

        fireEvent.click(submitButton);

        expect(console.log).toHaveBeenCalledWith('First Name:', 'John');
        expect(console.log).toHaveBeenCalledWith('Last Name:', 'Doe');
        expect(console.log).toHaveBeenCalledWith('Username:', 'johndoe123');
        expect(console.log).toHaveBeenCalledWith('Password:', 'password123');
        expect(console.log).toHaveBeenCalledWith('Verified Password:', 'password123');

    });
});
