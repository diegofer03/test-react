import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { useFetch } from '../../hooks/useFetch';
import CommentsListComponent from '.';
import { useApp } from '../../hooks/useProviderApp';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useProviderApp', () => ({
    useApp: jest.fn(),
}));
const mockComments = [
    {
        postId: 1,
        id:     1,
        name:   'test1',
        email:  'test@test.com',
        body:   'test description1'
    },
    {
        postId: 2,
        id:     2,
        name:   'test2',
        email:  'test@test.com',
        body:   'test description2'
    },
    {
        postId: 3,
        id:     3,
        name:   'test3',
        email:  'test@test.com',
        body:   'test description3'
    },
];

describe('CommentList Component', () => {
    let component: RenderResult
    let mockSignOut: jest.Mock;
    const auxMock = [...mockComments]
    beforeEach(() => {
        mockSignOut = jest.fn();

        (useFetch as jest.Mock).mockReturnValue(mockComments);
        (useApp as jest.Mock).mockReturnValue({ setLoading: mockSignOut });
        component = render(< CommentsListComponent/>)
    })

    afterEach(() => {
        jest.clearAllMocks();  
    });

    test('should render component and list of comments', () => {
        component.getByText(auxMock[2].name)
    })
})