"use client";

import TitleNav from "@/components/TitleNav";
import { Col, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import data from "@/app/data.json";
import RoundBgText from "@/components/RoundBgText";
import DoubleLayerText from "@/components/DoubleLayerText";

const Technology = () => {
  const technologyData = data.technology;
  const [techDataIndex, setTechDataIndex] = useState(0);

  const handleDataChange = (index: number) => {
    setTechDataIndex(index);
  };

  return (
    <div className="bg_technology">
      <div className="w-full pl-44">
        <div>
        <TitleNav title="Space launch 101" num="03" />
        </div>
        <Row className="pb-20">
          {/* <Col xs={24}>
            <TitleNav title="Space launch 101" num="03" />
          </Col> */}
          <Col xs={16}>
            <div className="flex items-center  h-[500px] gap-20">
              <div className="flex h-[300px]  gap-4 flex-col">
                {technologyData.map((item, index) => (
                  <RoundBgText
                    currentindex={index}
                    techDataIndex={techDataIndex}
                    handleClick={() => handleDataChange(index)}
                    key={item.name}
                    num={index + 1}
                  />
                ))}
              </div>
              <div className="flex justify-center h-[500px] items-center  ">
                <DoubleLayerText
                  upperLayerText={"The terminology..."}
                  lowerLayertext={technologyData[techDataIndex].name}
                  description={technologyData[techDataIndex].description}
                />
              </div>
            </div>
          </Col>
          <Col xs={8}>
            <span className="w-full h-full">
              <Image
                width={500}
                height={500}
                src={technologyData[techDataIndex].images.portrait}
                className="w-full h-full"
                alt="space"
              />
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Technology;
