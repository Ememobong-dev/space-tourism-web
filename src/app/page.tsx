export default function Home() {
  return (
    <div className="bg_home flex justify-end">
      <div className="flex justify-center px-28 items-center">
        <div className="flex flex-col gap-y-5">
          <p className="text-2xl font-bellefairReg uppercase text-blue300">
            So, you want to travel to
          </p>
          <h2 className="text-9xl font-bellefairReg">SPACE</h2>
          <p className=" font-barlowReg w-1/2 text-blue300 ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <div className="group bg-white cursor-pointer text-gray-800 font-bellefairReg flex justify-center items-center text-2xl rounded-full w-64 h-64 mx-auto relative overflow-hidden">
            <span>EXPLORE</span>
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
