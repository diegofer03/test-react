/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unexpected-multiline */
import { useEffect, useState } from 'react';
import { useApp } from '../useProviderApp';
import axios from 'axios';

export const useFetch = (apiUrl: string, deps = []) => {
	const [data, setData] = useState<Array<any>>();
    const {setLoading} = useApp()!

    async function fetchData(){
        setLoading(true)
        axios.get(apiUrl)
        .then((data:any) => {
            setData(data.data)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

	useEffect(() => {
        try {
            fetchData()
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
		
	}, deps);

	return data;
};