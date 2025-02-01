import React from 'react';

const RoundBgText = ({num, currentindex, techDataIndex,  handleClick} : {num: number; handleClick: () => void; currentindex: number; techDataIndex:number }) => {
  return (
    <div onClick={handleClick} className={`w-20 cursor-pointer bg-white flex justify-center text-3xl items-center h-w-20 rounded-full p-5 ${currentindex === techDataIndex ? "bg-white text-black" : "bg-transparent border text-white "}`}>
      <p>{num}</p>  
    </div>
  )
}

export default RoundBgText