"use client";

import TitleNav from "@/components/TitleNav";
import { Col, Row } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import data from "@/app/data.json";
import DoubleLayerText from "@/components/DoubleLayerText";

const Crew = () => {
  const crewData = data.crew;
  const [crewIndex, setCrewIndex] = useState(0);

  const handleCrewClick = (index: number) => {
    setCrewIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCrewIndex((n) => (n + 1 >= crewData.length ? 0 : n + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [crewIndex]);

  return (
    <div className="bg_crew">
      <div className="w-full px-8 pb-24  justify-center lg:px-44 lg:pb-24  ">
        <div>
          <TitleNav title="Meet your crew" num="02" />
        </div>
        <Row justify={"center"} align={"middle"} gutter={[0, 16]}>
          <Col xs={24} lg={16}>
            <div className="md:h-[500px] mt-8 lg:my-0 flex flex-col items-center lg:items-start gap-10 justify-center ">
              <DoubleLayerText
                upperLayerText={crewData[crewIndex].role}
                lowerLayertext={crewData[crewIndex].name}
                description={crewData[crewIndex].bio}
              />

              <div className="flex gap-4">
                {crewData.map((crew, index) => (
                  <span
                    key={crew.name}
                    onClick={() => handleCrewClick(index)}
                    className={` ${
                      crewIndex === index ? "bg-white" : "bg-white/15"
                    } cursor-pointer w-4 h-4 rounded-full p-2 `}
                  ></span>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="w-full hidden lg:block h-full  ">
              <Image
                src={crewData[crewIndex].images.png}
                alt="crew img"
                objectFit="cover"
                width={400}
                height={400}
                className="max-h-[450px] max-w-[450px]   "
              />
            </div>
            <div className=" lg:hidden flex justify-center  h-[250px] overflow-hidden ">
              <Image
                src={crewData[crewIndex].images.png}
                alt="crew img"
                width={250}
                height={200}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Crew;
