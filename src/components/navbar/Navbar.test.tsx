import { fireEvent, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import NavbarComponent from './index';
import { useApp } from '../../hooks/useProviderApp';
import { useNavigate } from 'react-router-dom';

jest.mock('../../hooks/useProviderApp', () => ({
    useApp: jest.fn(),
}));
  
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('Navbar component', () => {
    let mockSignOut: jest.Mock;
    let mockNavigate: jest.Mock;
    let component : RenderResult 

    beforeEach(() => {
        mockSignOut = jest.fn();
        mockNavigate = jest.fn();
        
        (useApp as jest.Mock).mockReturnValue({ signOut: mockSignOut });
        
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
        component = render(<NavbarComponent  />)
    })

    afterEach(() => {
        jest.clearAllMocks();  
    });

    test('Should render navbar', () => {
        component.getByText('ProDashboard')
    })

    test('should call logout with click', () => {
        const button = component.getByText('Logout')
        fireEvent.click(button)

        expect(mockSignOut).toHaveBeenCalled()
        expect(mockNavigate).toHaveBeenCalledWith('/login')
    })
})