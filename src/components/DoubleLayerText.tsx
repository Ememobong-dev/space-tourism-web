import React from "react";

type TextInterface = {
    upperLayerText: string;
    lowerLayertext: string;
    description: string;
}

const DoubleLayerText = ({upperLayerText, lowerLayertext, description} : TextInterface) => {
  return (
    <div className="flex flex-col gap-6 h-[300px]">
      <div>
        <h3 className=" text-white/70 uppercase font-bellefairReg text-3xl">
          {upperLayerText}
        </h3>
        <h3 className="text-5xl font-bellefairReg uppercase tracking-widest">
          {lowerLayertext}
        </h3>
      </div>
      <p className="text-blue300 h-[200px] w-[65%] font-barlowReg text-xl">
        {description}
      </p>
    </div>
  );
};

export default DoubleLayerText;
