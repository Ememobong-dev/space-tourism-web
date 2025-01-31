"use client";

import TitleNav from "@/components/TitleNav";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Row } from "antd";
import data from "@/app/data.json";

const Destination = () => {
  const destinationData = data.destinations;
  const [destinationIndex, setDestinationIndex] = useState(0);

  const handleDestinationClick = (index: number) => {
    setDestinationIndex(index);
  };

  return (
    <div className="bg_destination">
      <div className="px-28">
        <Row justify={"center"} className="pb-20">
          <Col xs={18} xxl={16}>
            <Row justify={"center"} gutter={72}>
              <Col xs={24}>
                <TitleNav title="Pick your destination" num="01" />
              </Col>
              <Col xs={12}>
                <div className=" w-full">
                  <Image
                    src={destinationData[destinationIndex].images.png}
                    alt="moon img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Col>
              <Col xs={12}>
                <div className="">
                  <div className="flex font-bellefairReg text-base text-blue300 uppercase items-center gap-10">
                    {destinationData.map((place, index) => (
                      <span
                        key={index}
                        onClick={() => handleDestinationClick(index)}
                        className={`cursor-pointer  ${destinationIndex === index ? "border-b-2 border-white" : ""} `}
                      >
                        {place.name}
                      </span>
                    ))}
                  </div>
                  <div className="mt-14 flex flex-col gap-y-10">
                    <h2 className="text-8xl uppercase font-bellefairReg ">
                      {destinationData[destinationIndex].name}
                    </h2>
                    <p className="text-xl font-barlowCondensedLight text-blue300 ">
                      {destinationData[destinationIndex].description}
                    </p>
                    <hr />
                    <div className="flex gap-20 items-center font-barlowCondensedLight">
                      <div>
                        <p className="text-blue300 font-barlowCondensedLight">
                          AVG. DISTANCE
                        </p>
                        <p className="font-bellefairReg uppercase text-xl tracking-widest">
                          {destinationData[destinationIndex].distance}
                        </p>
                      </div>
                      <div>
                        <p className="text-blue300 font-barlowCondensedLight">
                          EST. TRAVEL TIME
                        </p>
                        <p className="font-bellefairReg uppercase text-xl tracking-widest">
                          {destinationData[destinationIndex].travel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Destination;
