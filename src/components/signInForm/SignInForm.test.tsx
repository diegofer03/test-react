import { fireEvent, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignInFormComponent from '.';
import { SignInFormComponentProps } from '../../common/types'

describe('SigninForm component', () => {
    let component : RenderResult
    const mockProps: SignInFormComponentProps = {
        handleSubmit: jest.fn(e => e.preventDefault()),
        validateInputs: jest.fn(),
        handleClickShowPassword: jest.fn(),
        showPassword: false,
        emailError: false,
        emailErrorMessage: '',
        passwordError: false,
        passwordErrorMessage: ''
      };

    beforeAll(() => {
        HTMLFormElement.prototype.requestSubmit = function () {
            if (this.submit) {
            this.submit();
            }
        };
    });

    beforeEach(() => {
        HTMLFormElement.prototype.requestSubmit = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();  
    });

    test('should render component', () => {
        component = render(<SignInFormComponent {...mockProps}/>)
        component.getByPlaceholderText('your@email.com')
        component.getByPlaceholderText('••••••')
    })

    test('should display error message', () => {
        const errorProps: SignInFormComponentProps = {
            ...mockProps,
            emailError: true,
            emailErrorMessage: 'Invalid email address',
            passwordError: true,
            passwordErrorMessage: 'Password is required'
          };
        component = render(<SignInFormComponent {...errorProps}/>)
        component.getByText('Invalid email address')
        component.getByText('Password is required')
    })

    test('should handleSubmit for form', () => {
        // HTMLFormElement.prototype.requestSubmit = function () {
        //     if (this.submit) {
        //       this.submit();
        //     }
        // };
        // HTMLFormElement.prototype.requestSubmit = jest.fn();

        component = render(<SignInFormComponent {...mockProps}/>)
        const button = component.getByText('Login')
        fireEvent.click(button)

        expect(mockProps.validateInputs).toHaveBeenCalled()
    })

})