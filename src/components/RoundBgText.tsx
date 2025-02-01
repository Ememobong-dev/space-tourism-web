import React from 'react';

const RoundBgText = ({num} : {num: number}) => {
  return (
    <div className='w-20 h-20 rounded-full p-5'>
        {num}
    </div>
  )
}

export default RoundBgText