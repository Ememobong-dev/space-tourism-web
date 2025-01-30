import TitleNav from "@/components/TitleNav";
import Image from "next/image";
import React from "react";
import moonImg from "../../../public/assets/destination/image-moon.png";
import { Col, Row } from "antd";

const page = () => {
  return (
    <div className="bg_destination">
      <div className="px-28">
        <Row justify={"center"} className="pb-20">
          <Col xs={18} xxl={16}>
            <Row justify={"center"} gutter={45}>
              <Col xs={24}>
                <TitleNav title="Pick your destination" num="01" />
              </Col>
              <Col xs={12}>
                <div className=" ">
                  <Image src={moonImg} className="w-full" alt="moon img" />
                </div>
              </Col>
              <Col xs={12}>
                <div className="">
                  <div className="flex font-bellefairReg text-base text-blue300 uppercase items-center gap-10">
                    <span>Moon</span>
                    <span>Mars</span>
                    <span>Europe</span>
                    <span>Titan</span>
                  </div>
                  <div className="mt-20 flex flex-col gap-y-10">
                    <h2 className="text-8xl font-bellefairReg ">MOON</h2>
                    <p className="text-xl font-barlowCondensedLight text-blue300 ">
                    See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <hr />
                    <div className="flex gap-20 items-center font-barlowCondensedLight">
                      <div>
                        <p className="text-blue300 font-barlowCondensedLight">AVG. DISTANCE</p>
                        <p className="font-bellefairReg uppercase text-xl tracking-widest">384,400 KM</p>
                      </div>
                      <div>
                        <p className="text-blue300 font-barlowCondensedLight">EST. TRAVEL TIME</p>
                        <p className="font-bellefairReg uppercase text-xl tracking-widest">3 Days</p>
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

export default page;
