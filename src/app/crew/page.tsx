"use client";

import TitleNav from "@/components/TitleNav";
import { Col, Row } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import data from "@/app/data.json";









const Crew = () => {
    const crewData = data.crew;
    const [crewIndex, setCrewIndex] = useState(0);
  
    const handleCrewClick = (index: number) => {
        setCrewIndex(index);
    };


    useEffect( () => {
        const interval = setInterval( () => {
            setCrewIndex( (n) => n + 1 >= crewData.length ? 0 : n + 1 );

        }, 4000 )

        return () => clearInterval(interval)

    }, [crewIndex])

  return (
    <div className="bg_crew">
      <Row justify={"center"}  align={"middle"} className="pb-20">
        <Col xs={18} xxl={16}>
          <Row justify={"center"}  align={"middle"}>
            <Col xs={24}>
              <TitleNav title="Meet your crew" num="02" />
            </Col>
            <Col xs={12} className="">
              <div className="flex flex-col gap-y-14 ">
                <div>
                  <h3 className=" text-white/25 uppercase font-barlowCondensedLight text-5xl">
                  {crewData[crewIndex].role}
                  </h3>
                  <h3 className="text-5xl font-barlowCondensedLight uppercase tracking-widest">
                  {crewData[crewIndex].name}
                  </h3>
                </div>

                <p className="text-blue300 h-[200px] font-barlowCondensedLight text-base">
                {crewData[crewIndex].bio}
                </p>
                <div className="flex gap-4">
                    {
                        crewData.map( (crew, index) => (
                            <span key={crew.name} onClick={() => handleCrewClick(index)} className={` ${crewIndex === index ? "bg-white" : "bg-white/15"} cursor-pointer w-4 h-4 rounded-full p-2 `}></span>
                        ))
                    }
                </div>
              </div>

            </Col>
            <Col xs={12} className="">
              <span className=" h-[300px]">
                <Image
                  src={crewData[crewIndex].images.png}
                  alt="crew img"
                  objectFit="cover"
                  width={350}
                  height={300}
                />
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Crew;
