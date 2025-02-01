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
      <div className="w-full px-44">
        <div>
          <TitleNav title="Space launch 101" num="03" />
        </div>
        <Row className="pb-20" justify={"center"} align={"middle"}>
          <Col xs={16}>
            <div className="h-[500px] flex flex-col justify-center ">
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
          <Col xs={8}>
            <div className="w-full h-full  ">
              <Image
                src={crewData[crewIndex].images.png}
                alt="crew img"
                objectFit="cover"
                width={400}
                height={400}
                className="max-h-[600px] min-h-[600px] min-w-[500px] max-w-[500px] "
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Crew;
