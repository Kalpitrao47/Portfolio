import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getProductData } from '../dataSlice';

const useGetData = () => {
    const dispatch = useDispatch();

    async function getData (){
        const data = await fetch ("https://dummyjson.com/products");
        const json = await data.json();
        console.log(json.products);
        dispatch(getProductData(json.products));
    }

    useEffect(()=>{
        getData();
    },[])
}

export default useGetData
