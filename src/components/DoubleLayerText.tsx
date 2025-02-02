import React from "react";

type TextInterface = {
    upperLayerText: string;
    lowerLayertext: string;
    description: string;
}

const DoubleLayerText = ({upperLayerText, lowerLayertext, description} : TextInterface) => {
  return (
    <div className="flex flex-col items-center md:items-start gap-6 md:h-[300px]">
      <div>
        <h3 className=" text-white/70 text-center md:text-left uppercase font-bellefairReg text-lg md:text-3xl">
          {upperLayerText}
        </h3>
        <h3 className="md:text-5xl text-2xl  text-center md:text-left  font-bellefairReg uppercase tracking-widest">
          {lowerLayertext}
        </h3>
      </div>
      <p className="text-blue300 text-center md:text-left md:h-[200px] w-full md:w-[65%] font-barlowReg text-base md:text-xl">
        {description}
      </p>
    </div>
  );
};

export default DoubleLayerText;
