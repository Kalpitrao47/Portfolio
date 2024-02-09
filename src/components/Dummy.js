import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getProductData } from '../utils/dataSlice';
import useGetData from '../utils/CustomHooks/useGetData';

const Dummy = () => {
    
    useGetData();
    
  return (
    <div>
      <h1 className='text-black'>Dummy</h1>
    </div>
  )
}

export default Dummy
