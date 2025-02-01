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
        <h3 className=" text-white/25 uppercase font-barlowCondensedLight text-5xl">
          {upperLayerText}
        </h3>
        <h3 className="text-5xl font-barlowCondensedLight uppercase tracking-widest">
          {lowerLayertext}
        </h3>
      </div>
      <p className="text-blue300 h-[200px] w-[65%] font-barlowCondensedLight text-xl">
        {description}
      </p>
    </div>
  );
};

export default DoubleLayerText;
