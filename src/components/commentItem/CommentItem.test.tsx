import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import CommentItemComponent from './index';

describe('CommentItem component', () => {
    let component : RenderResult
    const commentMock = {
        postId: 1,
        id:     1,
        name:   'test',
        email:  'test@test.com',
        body:   'test description'
    }

    beforeEach(() => {
        component = render(< CommentItemComponent comment={commentMock}/>)
    })

    test('should render component', () => {
        component.getByText(commentMock.name)
    })
})