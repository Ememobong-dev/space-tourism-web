import React from "react";

const DestinationLastText = ({title, description} : {title: string; description: string}) => {
  return (
    <div className="mb-8 lg:mb-0">
      <p className="text-blue300 text-center lg:text-left">{title}</p>
      <p className="font-bellefairReg text-center lg:text-left uppercase text-xl tracking-widest">
        {description}
      </p>
    </div>
  );
};

export default DestinationLastText;
