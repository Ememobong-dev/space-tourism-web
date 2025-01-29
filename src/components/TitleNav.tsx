import React from 'react';

const TitleNav = ({num, title}: {num:string; title: string}) => {
  return (
    <div className='flex gap-3 uppercase'>
        <span className='font-barlowCondensedBold text-white/25'>
            {num}
        </span>
        <p className='font-barlowCondensedReg text-white'>{title}</p>
        
    </div>
  )
}

export default TitleNav