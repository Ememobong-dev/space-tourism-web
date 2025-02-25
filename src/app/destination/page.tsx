"use client";

import TitleNav from "@/components/TitleNav";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Row } from "antd";
import data from "@/app/data.json";
import DestinationLastText from "@/components/DestinationLastText";

const Destination = () => {
  const destinationData = data.destinations;
  const [destinationIndex, setDestinationIndex] = useState(0);

  const handleDestinationClick = (index: number) => {
    setDestinationIndex(index);
  };

  return (
    <div className="bg_destination">
      <div className="lg:px-44 md:pb-20 lg:pb-24 w-full">
        <div>
          <TitleNav title="Pick your destination" num="01" />
        </div>
        <Row justify={"center"} align={"middle"} >
          <Col xs={24} lg={12}>
            <div className=" hidden lg:block w-full">
              <Image
                src={destinationData[destinationIndex].images.png}
                alt="moon img"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "550px", height: "550px" }}
              />
            </div>
            <div className=" lg:hidden flex justify-center  h-[150px] overflow-hidden ">
              <Image
                src={destinationData[destinationIndex].images.png}
                alt="moon img"
                width={150}
                height={150}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
              <div className="flex font-barlowCondensedReg tracking-widest text-base text-blue300 uppercase items-center gap-10">
                {destinationData.map((place, index) => (
                  <span
                    key={index}
                    onClick={() => handleDestinationClick(index)}
                    className={`cursor-pointer  ${
                      destinationIndex === index
                        ? "border-b-4 border-white"
                        : ""
                    } `}
                  >
                    {place.name}
                  </span>
                ))}
              </div>
              <div className="lg:mt-14 mt-5 flex flex-col gap-5 lg:gap-y-10">
                <h2 className="lg:text-8xl text-5xl uppercase text-center lg:text-left font-bellefairReg ">
                  {destinationData[destinationIndex].name}
                </h2>
                <p className="text-xl md:px-28 lg:px-0 font-barlowReg text-blue300 text-center  lg:text-left ">
                  {destinationData[destinationIndex].description}
                </p>
                <hr />
                <div className="lg:flex gap-20  items-center font-barlowCondensedReg">
                  <DestinationLastText
                    title="AVG. DISTANCE"
                    description={destinationData[destinationIndex].distance}
                  />
                  <DestinationLastText
                    title="EST. TRAVEL TIME"
                    description={destinationData[destinationIndex].travel}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Destination;
