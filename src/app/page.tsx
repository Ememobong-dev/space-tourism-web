export default function Home() {
  return (
    <div className="bg_home flex  flex-col justify-end">
      <div className="flex  justify-around  p-28    ">
        <div className="flex  max-w-[500px] flex-col gap-y-5">
          <p className="text-2xl font-bellefairReg uppercase text-blue300">
            So, you want to travel to
          </p>
          <h2 className="text-9xl font-bellefairReg">SPACE</h2>
          <p className=" font-barlowReg  text-blue300 ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        
        <div>
          <div className=" bg-white cursor-pointer text-gray-800 font-bellefairReg flex justify-center items-center text-2xl rounded-full w-64 h-64  relative overflow-hidden">
            <span>EXPLORE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
