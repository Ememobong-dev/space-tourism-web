export default function Home() {
  return (
    <div className="bg_home">
      <div className="w-full flex px-8 lg:px-44 lg:pb-24">
        <div className="flex flex-col lg:flex-row w-full items-center lg:justify-around  ">
          <div className="flex items-center lg:items-start  max-w-[500px] flex-col gap-y-5">
            <p className=" text-lg lg:text-2xl font-bellefairReg uppercase text-blue300">
              So, you want to travel to
            </p>
            <h2 className="text-7xl lg:text-9xl font-bellefairReg">SPACE</h2>
            <p className=" font-barlowReg text-center lg:text-left text-blue300 ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="mt-20 mx:mt-0 flex justify-center pb-24 lg:pb-0">
            <div className=" bg-white cursor-pointer text-gray-800 font-bellefairReg flex justify-center items-center text-2xl rounded-full w-64 h-64 lg:w-64 lg:h-64  relative overflow-hidden">
              <span>EXPLORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
