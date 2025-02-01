import TitleNav from "@/components/TitleNav";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import xgs from "../../../public/assets/technology/image-launch-vehicle-landscape.jpg";
import data from "@/app/data.json";
import RoundBgText from "@/components/RoundBgText";

const Technology = () => {
  const technologyData = data.technology;

  return (
    <div className="bg_technology">
      <div>
        <Row>
          <Col xs={24}>
            <TitleNav title="Space launch 101" num="03" />
          </Col>
          <Col xs={12}>
            <div className="flex items-center gap-6">
              <div className="flex items-center flex-col">
                {technologyData.map((item, index) => (
                  <RoundBgText key={item.name} num={index + 1} />
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className=" text-white/25 uppercase font-barlowCondensedLight text-5xl">
                    The terminology
                  </h3>
                  <h3 className="text-5xl font-barlowCondensedLight uppercase tracking-widest">
                    Launch Vehicles
                  </h3>
                </div>
              </div>
              <p className="text-blue300 h-[200px] font-barlowCondensedLight text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam vel ipsum cupiditate ipsam voluptatem iure assumenda nihil cum laboriosam obcaecati, adipisci id fuga numquam totam molestiae magni blanditiis voluptatum!
                </p>
            </div>
          </Col>
          <Col xs={12}>
            <span className="w-full h-full">
              <Image src={xgs} alt="space" />
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Technology;
