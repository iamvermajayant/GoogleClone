import React from 'react';
import {ThreeDots} from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='flex items-center justify-center'>
        <ThreeDots radius="9" color="#00BFFF" height={550} width={80} visible={true}/>
    </div>
  )
}
