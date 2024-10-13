import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from './index';
import axios from 'axios';
import { useApp } from '../useProviderApp';

jest.mock('axios');
jest.mock('../useProviderApp',() => ({
    useApp: jest.fn(),
}));

describe('useFetch', () => {
  const mockSetLoading = jest.fn();
  
  beforeEach(() => {
    (useApp as jest.Mock).mockReturnValue({ setLoading: mockSetLoading });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set loading to true and fetch data successfully', async () => {
    const mockData = { data: [{ id: 1, name: 'Test' }] };
    (axios.get as jest.Mock).mockResolvedValue(mockData);

    const { result } = renderHook(() => useFetch('https://api.test.com/data'));

    expect(mockSetLoading).toHaveBeenCalledWith(true);

    await waitFor(() =>
        expect(result.current).toEqual([{"id": 1, "name": "Test"}])
    )

    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });

  it('should handle API failure and set loading to false', async () => {
    const mockError = new Error('API Error');
    (axios.get as jest.Mock).mockRejectedValue(mockError);

    const { result } = renderHook(() => useFetch('https://api.test.com/data'));

    expect(mockSetLoading).toHaveBeenCalledWith(true);

    await waitFor(() =>
        expect(result.current).toBeUndefined()
    )
    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });
});