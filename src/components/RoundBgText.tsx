import React from 'react';

const RoundBgText = ({num, currentindex, techDataIndex,  handleClick} : {num: number; handleClick: () => void; currentindex: number; techDataIndex:number }) => {
  return (
    <div onClick={handleClick} className={`md:w-20 md:h-20 h-14 w-14  cursor-pointer flex justify-center text-3xl items-center  font-bellefairReg rounded-full p-5 ${currentindex === techDataIndex   ? "bg-white text-black" : "bg-transparent border text-white "}`}>
      <p>{num}</p>  
    </div>
  )
}

export default RoundBgText