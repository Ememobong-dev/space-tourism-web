"use client";

import TitleNav from "@/components/TitleNav";
import { Col, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import data from "@/app/data.json";
import RoundBgText from "@/components/RoundBgText";

const Technology = () => {
  const technologyData = data.technology;
  const [techDataIndex, setTechDataIndex] = useState(0)

  const handleDataChange = (index: number) => {
    setTechDataIndex(index)

  }

  return (
    <div className="bg_technology">
      <div className="w-full pl-44">
        <Row className="pb-20">
          <Col xs={24}>
            <TitleNav title="Space launch 101" num="03" />
          </Col>
          <Col xs={16}>
            <div className="flex items-center  h-[500px] gap-20">
              <div className="flex h-[300px]  gap-4 flex-col">
                {technologyData.map((item, index) => (
                  <RoundBgText currentindex={index} techDataIndex={techDataIndex} handleClick={() => handleDataChange(index)} key={item.name} num={index + 1} />
                ))}
              </div>
              <div className="flex justify-center h-[500px] items-center  ">
                <div className="flex flex-col gap-6 h-[300px]">
                  <div>
                    <h3 className=" text-white/25 uppercase font-barlowCondensedLight text-5xl">
                      The terminology...
                    </h3>
                    <h3 className="text-5xl font-barlowCondensedLight uppercase tracking-widest">
                    {technologyData[techDataIndex].name}
                    </h3>
                  </div>
                  <p className="text-blue300 h-[200px] w-[65%] font-barlowCondensedLight text-xl">
                    {technologyData[techDataIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={8}>
            <span className="w-full h-full">
              <Image src= {technologyData[techDataIndex].images.portrait} className="w-full h-full" alt="space" />
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Technology;
