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
      <div className="w-full md:pl-44 lg:pb-24">
        <div>
          <TitleNav title="Space launch 101" num="03" />
        </div>
        <Row>
          <Col xs={{span:24, order:2 }} md={{span:16, order:1 }} >
            <div className="flex md:flex-row flex-col-reverse items-center  md:h-[500px] gap-10 md:gap-20">
              <div className="flex md:h-[300px]  gap-4  md:flex-col">
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
              <div className="flex justify-center md:h-[500px] items-center  ">
                <DoubleLayerText
                  upperLayerText={"The terminology..."}
                  lowerLayertext={technologyData[techDataIndex].name}
                  description={technologyData[techDataIndex].description}
                />
              </div>
            </div>
          </Col>
          <Col xs={{span:24, order:1 }} md={{span:8, order:2 }} >
            <span className="w-full hidden md:block h-full">
              <Image
                width={500}
                height={500}
                src={technologyData[techDataIndex].images.portrait}
                className="w-full h-full"
                alt="space"
              />
            </span>
            <span className="w-full md:hidden h-[250px]">
              <Image
                width={250}
                height={150}
                className="w-full"
                src={technologyData[techDataIndex].images.portrait}
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
