import React from "react";

type TextInterface = {
    upperLayerText: string;
    lowerLayertext: string;
    description: string;
}

const DoubleLayerText = ({upperLayerText, lowerLayertext, description} : TextInterface) => {
  return (
    <div className="flex flex-col mb-5 lg:mb-0 items-center lg:items-start gap-6 lg:h-[300px]">
      <div>
        <h3 className=" text-white/70 text-center lg:text-left uppercase font-bellefairReg text-lg lg:text-3xl">
          {upperLayerText}
        </h3>
        <h3 className="lg:text-5xl text-2xl  text-center lg:text-left  font-bellefairReg uppercase tracking-widest">
          {lowerLayertext}
        </h3>
      </div>
      <p className="text-blue300 md:px-28 lg:px-0 text-center lg:text-left lg:h-[200px] w-full lg:w-[65%] font-barlowReg text-base lg:text-xl">
        {description}
      </p>
    </div>
  );
};

export default DoubleLayerText;
