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
      <div className="w-full lg:pl-44 ">
        <div>
          <TitleNav title="Space launch 101" num="03" />
        </div>
        <Row>
          <Col xs={{span:24, order:2 }} lg={{span:16, order:1 }} >
            <div className="flex lg:flex-row flex-col items-center  lg:h-[500px] gap-10 lg:gap-20">
              <div className="flex lg:h-[300px] mt-3 lg:mt-0 gap-4  lg:flex-col">
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
              <div className="flex justify-center lg:h-[500px] items-center  ">
                <DoubleLayerText
                  upperLayerText={"The terminology..."}
                  lowerLayertext={technologyData[techDataIndex].name}
                  description={technologyData[techDataIndex].description}
                />
              </div>
            </div>
          </Col>
          <Col xs={{span:24, order:1 }} lg={{span:8, order:2 }} >
            <span className="w-full hidden lg:block h-full">
              <Image
                width={500}
                height={500}
                src={technologyData[techDataIndex].images.portrait}
                className="w-full h-full"
                alt="space"
              />
            </span>
            <span className="w-full h-full lg:hidden ">
              <Image
                width={100}
                height={250}
                className="object-cover w-full h-[250px] md:h-[350px]"
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
