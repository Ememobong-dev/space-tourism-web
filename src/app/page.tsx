export default function Home() {
  return (
    <div className="bg_home">
      <div className="w-full flex px-8 md:px-44">
        <div className="md:flex w-full items-center md:justify-around  ">
          <div className="flex  items-center md:items-start  max-w-[500px] flex-col gap-y-5">
            <p className=" text-lg md:text-2xl font-bellefairReg uppercase text-blue300">
              So, you want to travel to
            </p>
            <h2 className="text-7xl md:text-9xl font-bellefairReg">SPACE</h2>
            <p className=" font-barlowReg text-center md:text-left text-blue300 ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="mt-20 mx:mt-0 flex justify-center">
            <div className=" bg-white cursor-pointer text-gray-800 font-bellefairReg flex justify-center items-center text-2xl rounded-full w-44 h-44 md:w-64 md:h-64  relative overflow-hidden">
              <span>EXPLORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
