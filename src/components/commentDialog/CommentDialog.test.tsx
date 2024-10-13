import { fireEvent, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import CommentDialogComponent from './index';

describe('CommentDialog Component', () => {
    let component : RenderResult
    const handleClose = jest.fn()
    const commentMock = {
        postId: 1,
        id:     1,
        name:   'test',
        email:  'test@test.com',
        body:   'test description'
    }
    const open = true

    beforeEach(() => {
        component = render(<CommentDialogComponent handleClose={handleClose} comment={commentMock} open={open}/>)
    })

    test('should render dialog', () => {
        component.getByText(commentMock.name)
    })

    test('should call close dialog', () => {
        const button = component.getByLabelText('close')
        fireEvent.click(button)

        expect(handleClose).toHaveBeenCalled()
    })
})